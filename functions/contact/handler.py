import json
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import re
import urllib.request


def sendEmail(receiver: str, subject: str, message: str, user_email: str, sent_to: str = 'lablnet') -> bool:
    """
    Send email.
    :param receiver: Receiver email.
    :param subject: Email subject.
    :param message: Email message.
    :param user_email: User email.
    :return: Boolean
    :author: Muhammad Umer Farooq
    """
    s = smtplib.SMTP(host=os.environ.get("SMTP_HOST"),
                     port=os.environ.get("SMTP_PORT"))
    s.starttls()
    s.login(os.environ.get("SMTP_USER"), os.environ.get("SMTP_PASS"))
    msg = MIMEMultipart()
    # Add reply to header.
    msg.add_header('reply-to', user_email if sent_to ==
                   'lablnet' else os.environ.get("SMTP_CC"))

    if sent_to == 'lablnet':
        # Add CC header.
        msg.add_header('cc', os.environ.get("SMTP_CC"))

    msg['From'] = os.environ.get("SMTP_USER")
    msg['To'] = receiver
    msg['Subject'] = subject
    msg.attach(MIMEText(message, 'html'))
    s.send_message(msg)
    return s


def response(statusCode: int, errors: dict = None) -> json:
    """
    Return response.
    :param statusCode: HTTP status code.
    :param errors: Errors.
    :return: JSON
    :author: Muhammad Umer Farooq
    """
    body = {
        'success': True if statusCode == 200 else False,
        'errors': errors if not None else False
    }

    return {
        'statusCode': statusCode,
        'body': json.dumps(body),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'OPTIONS,POST',
            'Access-Control-Allow-Credentials': True
        },
    }


def validateCaptcha(captcha: str) -> bool:
    """
    Validate captcha response.
    :param captcha: Captcha response.
    :return: Boolean
    :author: Muhammad Umer Farooq
    """
    url = 'https://www.google.com/recaptcha/api/siteverify'
    payload = {
        'secret': os.environ.get("CAPTCHA_SECRET"),
        'response': captcha
    }
    response = urllib.request.urlopen(
        url, data=urllib.parse.urlencode(payload).encode('utf-8'))
    if response.getcode() == 200:
        return json.loads(response.read().decode('utf-8'))['success']
    return False


def validate(data: dict) -> dict:
    """
    Validate data.
    :param data: Data.
    :return: Errors
    :author: Muhammad Umer Farooq
    """
    errors = {}
    # Check no field is empty.
    for key, value in data.items():
        if value is None or value == "":
            errors[key] = "This field is required."
    # Check email is valid.
    if not errors.get('email') and not re.match("^[^@]+@[^@]+\.[^@.]+$", data['email']):
        errors["email"] = "Please enter a valid email address."
    # Check captcha is valid.
    if not errors and not validateCaptcha(data['captcha']):
        errors['captcha'] = 'Invalid captcha response'

    return errors


def lambda_handler(event, context):
    """
    Lambda Handler.
    """
    # Sent report to cloudwatch.
    print(event)

    body = event

    data = {
        'name': body.get('name'),
        'email': body.get('email'),
        'subject': body.get('subject'),
        'message': body.get('message'),
        'captcha': body.get('captcha'),
    }

    # validate the data.
    if errors := validate(data):
        return response(400, errors)

    # load template and replace placeholders.
    lablnet_template = open('templates/lablnet.html', 'r').read()
    lablnet_template = lablnet_template.replace('{{name}}', data['name'])
    lablnet_template = lablnet_template.replace('{{email}}', data['email'])
    lablnet_template = lablnet_template.replace('{{subject}}', data['subject'])
    lablnet_template = lablnet_template.replace('{{msg}}', data['message'])
    subject = 'You have new contact form submission | ' + data['subject']
    # send the email.
    result = sendEmail(os.environ.get("SMTP_TO"),
                       subject, lablnet_template, data['email'], sent_to='lablnet')
    user_template = open('templates/user.html', 'r').read()
    user_template = user_template.replace('{{name}}', data['name'])
    user_template = user_template.replace('{{email}}', data['email'])
    user_template = user_template.replace('{{subject}}', data['subject'])
    user_template = user_template.replace('{{msg}}', data['message'])
    subject = 'Your request has been received'
    sendEmail(data['email'], subject, user_template,
              data['email'], sent_to='user')
    if result:
        return response(200)
    else:
        return response(500)

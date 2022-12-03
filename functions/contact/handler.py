import os
from helpers import sanitizeInput, sendEmail, response, validate


def lambda_handler(event, context):
    """
    Lambda Handler.
    """
    # Sent report to cloudwatch.
    # print(event)

    body = event

    data = {
        'name': sanitizeInput(body.get('name')),
        'email': sanitizeInput(body.get('email')),
        'subject': sanitizeInput(body.get('subject')),
        'message': sanitizeInput(body.get('message')),
        'captcha': sanitizeInput(body.get('captcha')),
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

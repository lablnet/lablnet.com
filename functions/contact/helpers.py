def sanitizeInput(input: str) -> str:
    """
    sanitizes input
    :param input: (str)
    :since 1.0.0
    :return escape: (str)
    :raises: None
    :example: sanitizeInput("+<>^&")
    """
    import html
    return html.escape(input)

def validateEmail(email: str) -> bool:
    """
    checks if the email is valid or not.
    :param email: (str)
    :since 1.0.0
    :return: boolean
    :raises: None
    :example: validateEmail("Dummyemail12@gmail.com")
    """
    import re
    if (re.search('^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$', email)):
        return True
    else:
        return False


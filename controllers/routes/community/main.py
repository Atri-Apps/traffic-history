from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
from backend.integrations.slack.api import get_slack_users
from backend.integrations.youtube.api import get_channel_statistics


def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.TextBox123.custom.text = get_slack_users()
    yt_data = get_channel_statistics()
    at.TextBox124.custom.text = str(int(yt_data['viewCount']) / 1000) + 'K'
    at.TextBox125.custom.text = yt_data['subscriberCount']
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    pass
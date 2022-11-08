from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    at.LineChart15.custom.data = [
    {
        "x": "Oct 21",
        "downloads": 200,
    },
    {
        "x": "Oct 22",
        "downloads": 300,
    },
    {
        "x": "Oct 23",
        "downloads": 150,
    },
    {
        "x": "Oct 24",
        "downloads": 250,
    },
    {
        "x": "Oct 25",
        "downloads": 200,
    },
    {
        "x": "Oct 26",
        "downloads": 400,
    },
    {
        "x": "Oct 27",
        "downloads": 200,
    },
    {
        "x": "Oct 28",
        "downloads": 300,
    },
    {
        "x": "Oct 29",
        "downloads": 200,
    },
    {
        "x": "Oct 30",
        "downloads": 250,
    },
    {
        "x": "Oct 31",
        "downloads": 400,
    },
    ]

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    pass
from .atri import Atri
from fastapi import Request, Response
from atri_utils import *

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """

    at.Table8.custom.cols = [
    { "field": "id", "headerName": "ID" },
    { "field": "date", "headerName": "Date" },
    { "field": "activity", "headerName": "Activity" , "width": 300},
    { "field": "reach", "headerName": "Reach", "type": "number" },
    ]

    # add rows
    at.Table8.custom.rows = [
    { "id": 1, "date": "Oct 1", "activity": "Conference talk at ConfName", "reach": 100 },
    { "id": 2, "date": "Oct 15", "activity": "Conference talk at ConfName2", "reach": 200 },
    { "id": 3, "date": "Oct 31", "activity": "Conference talk at ConfName3", "reach": 300 },
    ]

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
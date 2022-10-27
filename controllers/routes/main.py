from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
from pymongo import MongoClient
import os
# mongodb+srv://admin:admin@cluster0.d7lrzyw.mongodb.net/?retryWrites=true&w=majority
from backend.extra import get_data

#TODO :- Move get_data outside controllers - Done
#TODO :- Add Aditya's code to backend folder in root - Done
#TODO :- Create integrations/github/api.py in backend - Done
#TODO :- rename main to cron....py - Done
#TODO :- cahnge acess to 754 and add !# USR/ - Done
#TODO :- rEMOVE mongoDb from repo and use env var - Done
#TODO :- List out all the env variables needed - Outsourced
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
    at.Table1.custom.cols = [
        {"field": "query date", "headerName": "Date"},
        {"field": "site", "headerName": "Website"},
        {"field": "views", "headerName": "Views", 'type': 'number'},
        {"field": "unique views", "headerName": "Unique Views", "type": "number"}
    ]
    at.Table2.custom.cols = [
        {"field": "query date", "headerName": "Date"},
        {"field": "content", "headerName": "Content"},
        {"field": "path", "headerName": "Path"},
        {"field": "views", "headerName": "Views", 'type': 'number'},
        {"field": "unique views", "headerName": "Unique Views", "type": "number"}
    ]
    at.LineChart1.custom.data = get_data('visitors')
    at.LineChart2.custom.data = get_data('clones')
    at.Table1.custom.rows = get_data('sites')
    at.Table2.custom.rows = get_data('content')
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    pass
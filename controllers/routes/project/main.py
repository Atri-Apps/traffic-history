from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
from collections import defaultdict
from backend.integrations.github.api import data, stars
from backend.db_adapters.db_map import db_map
from datetime import datetime, timedelta, date as dt


def create_date(days):
    if days == 'Lifetime':
        return None
    return (datetime.today() - timedelta(int(days.split()[1]))).date()


def set_filtered_data(at: Atri):
    min_date = create_date(at.Dropdown9.custom.selectedValue)
    at.TextBox180.custom.text = f'{min_date if min_date is not None else "The Beginning" } - {datetime.today().date()}'
    date_dropdown_val = at.Dropdown9.custom.selectedValue
    min_date = create_date(date_dropdown_val)
    set_sites_chart(at, date=min_date)
    set_content_data(at, date=min_date)
    at.TextBox96.custom.text, at.LineChart18.custom.data = set_traffic_data(date=min_date)
    at.TextBox93.custom.text, at.LineChart17.custom.data = set_stars_chart(date=min_date)


def set_stars_chart(date=None):
    headers = {
        'Accept': 'application/vnd.github.v3.star+json',
        'Authorization': os.environ.get("USER"),
    }
    dic = defaultdict(int)
    stargazers = stars(headers)
    for i in stargazers:
        starred_date = (i['starred_at'].split('T')[0]).split('-')
        if date is not None:
            if dt(int(starred_date[0]), int(starred_date[1]), int(starred_date[2])) > date:
                dic[i['starred_at'].split('T')[0]] += 1
        else:
            dic[i['starred_at'].split('T')[0]] += 1
    f = [{'x': i, 'stars': j} for i, j in dic.items()]
    return len(stargazers), f


def set_reffering_chart():
    pass


def set_sites_chart(at: Atri, date=None, site_filter=''):
    db_name = os.environ.get("DATABASE")
    db_name = db_name.replace(" ", '').lower()
    database = db_map[db_name]()
    s = set()
    dic = defaultdict(list)
    for i in database.get_data('sites'):
        for j in i['sites']:
            if date is not None:
                query_date = j['query_date'].split('-')
                if dt(int(query_date[0]), int(query_date[1]), int(query_date[2])) > date:
                    dic[j['site']].append({
                        'x': j['query_date'],
                        'views': j['views'],
                        'unique_views': j['unique_views']
                    })
            else:
                dic[j['site']].append({
                    'x': j['query_date'],
                    'views': j['views'],
                    'unique_views': j['unique_views']
                })
            s.add(j['site'])
    if site_filter != '':
        at.LineChart19.custom.data = dic[site_filter]
        return
    at.Dropdown1.custom.values = list(s)
    at.Dropdown1.custom.selectedValue = list(s)[0]
    at.LineChart19.custom.data = dic[at.Dropdown1.custom.selectedValue]


def set_content_data(at: Atri, date=None, content_filter=''):
    db_name = os.environ.get("DATABASE")
    db_name = db_name.replace(" ", '').lower()
    database = db_map[db_name]()
    s = set()
    dic = defaultdict(list)
    for i in database.get_data('content'):
        for j in i['popular content']:
            if date is not None:
                query_date = j['query_date'].split('-')
                if dt(int(query_date[0]), int(query_date[1]), int(query_date[2])) > date:
                    dic[j['path']].append({
                        'x': j['query_date'],
                        'views': j['views'],
                        'unique_views': j['unique_views']
                    })
            else:
                dic[j['path']].append({
                    'x': j['query_date'],
                    'views': j['views'],
                    'unique_views': j['unique_views']
                })
            s.add(j['path'])
    if content_filter != '':
        at.LineChart20.custom.data = dic[content_filter]
        return
    at.Dropdown4.custom.values = list(s)
    at.Dropdown4.custom.selectedValue = list(s)[0]
    at.LineChart20.custom.data = dic[at.Dropdown4.custom.selectedValue]


def set_traffic_data(date=None):
    db_name = os.environ.get("DATABASE")
    db_name = db_name.replace(" ", '').lower()
    database = db_map[db_name]()
    visitors_data = database.get_data('visitors')
    s = 0
    for i in visitors_data:
        s += i['views']
    return str(s/1000)[:4] + 'K', visitors_data


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
    set_filtered_data(at)
    pass


def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Dropdown1.onChange:
        set_sites_chart(at, site_filter=at.Dropdown1.custom.selectedValue, date=create_date(at.Dropdown9.custom.selectedValue))

    if at.Dropdown4.onChange:
        set_content_data(at, content_filter=at.Dropdown4.custom.selectedValue, date=create_date(at.Dropdown9.custom.selectedValue))

    if at.Dropdown9.onChange:
        set_filtered_data(at)


import os
from slack_sdk import WebClient


def get_slack_users():
    client = WebClient(token=os.environ.get('SLACK_TOKEN'))
    result = client.users_list()
    while result.status_code != 200:
        result = client.users_list()
    return len(result["members"])
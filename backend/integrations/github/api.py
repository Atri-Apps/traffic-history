import requests
import time

def data(headers, path):
    getvalue = requests.get(f'https://api.github.com/repos/Atri-Labs/atrilabs-engine/traffic/{path}',
                            headers=headers)
    while getvalue.status_code != 200:
        getvalue = requests.get(f'https://api.github.com/repos/Atri-Labs/atrilabs-engine/traffic/{path}',
                                headers=headers)
        print('Loop')
    return getvalue


def stars(headers):
    page_number = 1
    completed_flag = False
    stargazers = []

    while not completed_flag:
        getvalue = requests.get(f'https://api.github.com/repos/Atri-Labs/atrilabs-engine/stargazers?per_page=100&page={page_number}',
                            headers=headers)
        print('Loop1')
        while getvalue.status_code != 200:
            getvalue = requests.get('https://api.github.com/repos/Atri-Labs/atrilabs-engine/stargazers',
                                headers=headers)
            print('Loop2')
        if not getvalue.json():
            completed_flag = True
            continue

        for entry in getvalue.json():
            dictionary = {
                "starred_at": entry['starred_at'],
                "login": entry['user']['login'],
                "id": entry['user']['id'],
                "node_id": entry['user']['node_id'],
                "avatar_url": entry['user']['avatar_url'],
                "gravatar_id": entry['user']['gravatar_id'],
                "url": entry['user']['url'],
                "html_url": entry['user']['html_url'],
                "followers_url": entry['user']['followers_url'],
                "following_url": entry['user']['following_url'],
                "gists_url": entry['user']['gists_url'],
                "starred_url": entry['user']['starred_url'],
                "subscriptions_url": entry['user']['subscriptions_url'],
                "organizations_url": entry['user']['organizations_url'],
                "repos_url": entry['user']['repos_url'],
                "events_url": entry['user']['events_url'],
                "received_events_url": entry['user']['received_events_url'],
                "type": entry['user']['type'],
                "site_admin": entry['user']['site_admin']
            }
            stargazers.append(dictionary)

        page_number += 1

    return stargazers




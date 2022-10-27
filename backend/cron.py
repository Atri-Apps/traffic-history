#! /usr/bin/env python3

import os
from integrations.github.api import stars, data
from db_adapters.db_map import db_map
from datetime import date

headers = {
    'Accept': 'application/vnd.github.v3.star+json',
    'Authorization': os.environ.get("USER"),
}


def simplify(string):
    return string.replace(" ", "").lower()


if __name__ == '__main__':
    db_name = os.environ.get("DATABASE")
    db_name = simplify(db_name)
    database = db_map[db_name]()

    getViews = data(headers, 'views')
    getClones = data(headers, 'clones')
    getPaths = data(headers, 'popular/paths')
    getSources = data(headers, 'popular/referrers')
    getStars = stars(headers)

    visitors = {
        "_id": getClones.json()['clones'][len(getClones.json()['clones']) - 1]['timestamp'],
        "date": getViews.json()['views'][len(getViews.json()['views']) - 1]['timestamp'][0:10],
        "views": getViews.json()['views'][len(getViews.json()['views']) - 1]['count'],
        "unique_visitors": getViews.json()['views'][len(getViews.json()['views']) - 1]['uniques']
    }
    clones = {
        "_id": getClones.json()['clones'][len(getClones.json()['clones']) - 1]['timestamp'],
        "date": getClones.json()['clones'][len(getClones.json()['clones']) - 1]['timestamp'][0:10],
        "clones": getClones.json()['clones'][len(getClones.json()['clones']) - 1]['count'],
        "unique_cloners": getClones.json()['clones'][len(getClones.json()['clones']) - 1]['uniques']
    }

    sites_arr = []
    for value in getSources.json():
        temp = {
            "query_date": str(date.today()),
            "site": value["referrer"],
            "views": value["count"],
            "unique_views": value["uniques"]
        }
        sites_arr.append(temp)
    sources = {
        "date": str(date.today()),
        "sites": sites_arr,
    }



    content_arr = []
    for value in getPaths.json():
        temp = {
            "query_date": str(date.today()),
            "content": value["title"],
            "path": value["path"],
            "views": value["count"],
            "unique_views": value["uniques"]
        }
        content_arr.append(temp)
    paths = {
        "date": str(date.today()),
        "popular_content": content_arr
    }

    stargazers_dictionary = {
        'number': len(getStars),
        'stargazers': getStars
    }

    database.push_data(visitors, clones, sources, paths)






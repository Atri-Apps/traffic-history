import os
from pymongo import MongoClient

def get_data(collection_name):
    db_url = os.environ.get('DB_URI')
    client = MongoClient(db_url)
    db = client['gh-traffic']
    arr = []
    if collection_name == 'visitors':
        collection = db[collection_name]
        values = collection.find()
        for val in values:
            dummy = {
                "x": val["date"],
                "views": val["views"],
                "unique_visitors": val["unique_visitors"]
            }
            arr.append(dummy)
    elif collection_name == 'clones':
        collection = db[collection_name]
        values = collection.find()
        for val in values:
            dummy = {
                "x": val["date"],
                "clones": val["clones"],
                "unique_cloners": val["unique_cloners"]
            }
            arr.append(dummy)
    elif collection_name == 'sites':
        collection = db[collection_name]
        values = collection.find()
        for val in values:
            dummy = {
                'date': val['date'],
                'sites': val['sites']
            }
            arr.append(dummy)
            break
        for i in range(len(arr[0]['sites'])):
            arr[0]['sites'][i]['id'] = i + 1
        return arr[0]['sites']
    elif collection_name == 'content':
        collection = db[collection_name]
        values = collection.find()
        for val in values:
            dummy = {
                'date': val['date'],
                'popular content': val['popular_content']
            }
            arr.append(dummy)
            break
        for i in range(len(arr[0]['popular content'])):
            arr[0]['popular content'][i]['id'] = i + 1
        return arr[0]['popular content']
    return arr

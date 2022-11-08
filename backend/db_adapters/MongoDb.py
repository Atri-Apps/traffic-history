from pymongo import MongoClient
from DbClass import DbClass
import os


class MongoDb(DbClass):
    def __init__(self):
        self.client = self.get_client()
    def get_client(self):
        db_url = os.environ.get("DB_URI")
        client = MongoClient(db_url)
        return client['gh-traffic']

    def push_visitors(self, dic, db):
        db['visitors'].insert_one(dic)

    def push_clones(self, dic, db):
        db['clones'].insert_one(dic)

    def push_sites(self, dic, db):
        db['sites'].insert_one(dic)

    def push_content(self, dic, db):
        db['content'].insert_one(dic)

    def push_data(self, visitors, clones, sites, content):
        db = self.client
        self.push_visitors(visitors, db)
        self.push_clones(clones, db)
        self.push_sites(sites, db)
        self.push_content(content, db)

    def get_data(self, collection_name):
        db = self.client
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
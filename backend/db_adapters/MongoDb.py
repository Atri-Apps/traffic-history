from pymongo import MongoClient
from DbClass import DbClass
import os

class MongoDb(DbClass):

    def get_database(self):
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
        db = self.get_database()
        self.push_visitors(visitors, db)
        self.push_clones(clones, db)
        self.push_sites(sites, db)
        self.push_content(content, db)



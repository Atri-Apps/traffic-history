from abc import ABC, abstractmethod


class DbClass(ABC):

    @abstractmethod
    def get_client(self):
        pass

    @abstractmethod
    def push_visitors(self, dic, db):
        pass

    @abstractmethod
    def push_clones(self, dic, db):
        pass

    @abstractmethod
    def push_sites(self, dic, db):
        pass

    @abstractmethod
    def push_content(self, dic, db):
        pass

    @abstractmethod
    def push_data(self, visitors, clones, sites, content):
        pass

    @abstractmethod
    def get_data(self, collection_name):
        pass




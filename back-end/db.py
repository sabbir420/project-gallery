from config import Credentials
import pymysql


def db_connection():
    connection = pymysql.connect(host=Credentials.Database.database_host,
                                user=Credentials.Database.user,
                                password=Credentials.Database.password,
                                db=Credentials.Database.database,
                                charset='utf8mb4',
                                cursorclass=pymysql.cursors.DictCursor
                                )
    return connection

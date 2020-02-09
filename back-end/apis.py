from db import db_connection


def getBlogs():
    conn = db_connection()
    print(conn)
    cursor = conn.cursor()

    cursor.close()
    conn.close()

    return {"status":1,"message":"Connection Successful"}

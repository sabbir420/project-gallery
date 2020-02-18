from db import db_connection


def getBlogs():
    conn = db_connection()
    #print(conn)
    cursor = conn.cursor()

    sql = "SELECT user_data.author_name, user_content.title, user_content.content, user_content.url FROM user_data,user_content where user_data.id=user_content.author_id"
    cursor.execute(sql)
    output = cursor.fetchall()

    cursor.close()
    conn.close()

    return {"status":1,"message":"Blog Data","response":output}

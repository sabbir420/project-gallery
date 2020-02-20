from flask import Flask
from flask_restful import Resource,Api, reqparse

import apis



app = Flask(__name__)

api = Api(app)



class HomePage(Resource):
    def get(self):

        return {"status":"success"}

class GetBlogs(Resource):
    def get(self):
        output = apis.getBlogs()
        return output


api.add_resource(HomePage,'/')
api.add_resource(GetBlogs,'/blogs')


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)

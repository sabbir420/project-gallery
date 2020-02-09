from flask import Flask
from flask_restful import Resource,Api, reqparse


#import apis



app = Flask(__name__)

api = Api(app)



class HomePage(Resource):
    def get(self):
        #parser = reqparse.RequestParser()

        #output = apis.home()
        return {"status":"success"}




api.add_resource(HomePage,'/home')


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)

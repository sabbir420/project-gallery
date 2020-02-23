# project-gallery

## Overview

This AWS CloudFormation template is to deploy an API endpoint. Following AWS services are used:

1. RESTful API with POST method on API Gateway.
2. RDS MySQL database instance of type **db.t2.micro**.
3. Lambda Function which will be triggered by API Gateway. This function will create a **blog_data** table in the database where it will insert two sample blogs with title, author_name and content. It further queries the table and return the content inserted.

## AWS Architecture Diagram

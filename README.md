# Node and Vue Web Application

Basic web application using Node and Vue.

## Deployment

### Client

When pushing new code into the main branch of the repository the deployment github action will build the application and host it on a AWS S3 Bucket. You can follow the link below to check the deployment.

[Vue.JS Client Web Application Delployment](http://vuejs-basic-app.s3-website.eu-central-1.amazonaws.com/)

### Server

When pushing new code into the main branch of the repository the AWS CodePipeline is notified and the server code is being pushed and deployed by AWS Elastic Beanstalk.

[Node.JS Server Application Delployment](http://nodejsandvuebackend-env-1.eba-ucpfdf3g.eu-central-1.elasticbeanstalk.com/)

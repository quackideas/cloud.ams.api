var AWS = require('aws-sdk');

// Get reference to AWS clients
// var docClient = new AWS.DynamoDB.DocumentClient({
//     region:process.env.DB_REGION
// });


exports.handler = (event, context, callback) =>
{
    callback(null, {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
       "body" : "{\"test\": \"here\"}"
    });
}
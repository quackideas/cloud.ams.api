var AWS = require('aws-sdk');

// Get reference to AWS clients
// var docClient = new AWS.DynamoDB.DocumentClient({
//     region:process.env.DB_REGION
// });


exports.handler = (event, context, callback) =>
{
    var _meetings = {
      events: [{name: '2018 Chicago Assembly'}, {name: '2017 New Orleans Assembly'}, {name: '2018 San Francisco Assembly'}]
    };

    callback(null, {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
       "body" : JSON.stringify(_meetings)
    });
}
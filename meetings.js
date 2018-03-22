exports.handler = (event, context, callback) =>
{
    callback(null,{
       events: [
           {
               'name': '2018 Assembly'
           },
           {
               'name': '2017 Assembly'
           },
           {
               'name': '2016 Assembly'
           }
       ]
    });
}
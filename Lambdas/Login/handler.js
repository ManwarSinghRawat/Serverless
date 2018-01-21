'use strict';

module.exports.login = (event, context, callback) => {
 if(event.queryStringParameters && event.queryStringParameters.name){
	 return callback(null,{
			    statusCode: 200,
			    body: JSON.stringify({
			      message: 'Hello '+ event.queryStringParameters.name
			    }),
			  })
	 }
 
 

    
 
	
	

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


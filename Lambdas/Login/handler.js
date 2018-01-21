'use strict';

module.exports.login = (event, context, callback) => {

  if(event.httpMethod == 'POST' && event.body){
	  let json = JSON.parse(event.body);
	  let name = json.userName;
	  console.log('name '+name);
	 let password = json.password;
	  if(name == 'Manwar' && password =='password'){
		  
		  
		  var responseBody = {
				  validate: true,
				  message: 'Login Successful'
			    };
		  return callback(null,{
			    statusCode: 200,
			    body: JSON.stringify(responseBody),
			  })	  
	  }else
		  {
		  var responseBody = {
				  validate: false,
				  message: 'Login falure'
			    };
		  return callback(null,{
			    statusCode: 400,
			    body: JSON.stringify(responseBody),
			  })	
		  }
  }

    
 
	
	

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


const express =require('express');
const bodyParser =require('body-parser');

const {PORT}=require('./config/serverConfig');
const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = ( )=> {
     const app=express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));

 app.listen(PORT, ()=>{
  console.log(`server started at ${PORT}`);

     sendBasicEmail(
        'support@admin.com',
        'saupotka@gmail.com',
        'This is an testing email',
        'Hey, how are you, i hope you like the support'

     );
 });
}

setupAndStartServer();
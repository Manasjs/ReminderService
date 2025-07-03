const sender = require('../config/emailConfig');

const sendBasicEmail =async (mailFrom, mailTo, mailSubject, mailBody)=>{
    try {
        const response = await sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
    console.log(response);
    } catch (error) {
        console.log("somthing went wrong");
    };
   
}

module.exports ={
    sendBasicEmail
}
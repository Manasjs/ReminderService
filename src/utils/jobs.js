const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender =require('../config/emailConfig');

 const setupJobs = () => {
    cron.schedule('*/2 * * * *',async () => {
    const response =await emailService.fetchPendingEmails();

    response.forEach((email) => {
      sender.sendMail({
        to:email.recepientEmail,
        subject:email.subject,
        text:email.content
      },async(error,data)=>{
           if(error){
            console.log(error);
           }else{
            console.log(data);
            await emailService.updateTicket(email.id,{status:"SUCCESS"});
           }
      });
    });
    console.log(response);
  });

}

module.exports = setupJobs;
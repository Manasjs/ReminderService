const sender = require('../config/emailConfig');
const TicketRepository =require('../repository/ticket-repository');
const repo = new TicketRepository;

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

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({status:"PENDING"});
        return response;
    } catch (error) {
       console.log(error) ;
       throw error;
    }
}

const createNotification = async(data)=>{
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateTicket =async(ticketId,data)=>{
    try {
       const response = await repo.update(ticketId,data);
       return response; 
    } catch (error) {
       console.log(error);
       throw error; 
    }
}

module.exports ={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}
var nodemailer = require("nodemailer");
var mailsSendCounter=0
var bodyEmail="Hello this is a email to mr mario"
var mailName=["supermario","@gmail.com"]



// var smtpTransport = nodemailer.createTransport("smtps://mail%40assesstm.com:pass@smtp.gmail.com"); // PUT YOUR SMTP HERE

  smtpTransport.sendMail({  //email options
     from: "Sender Name <h.rashwan@assesstm.com>", // sender address.  Must be the same as authenticated user if using Gmail.
     to: mailToSendTo || "h2rashwan@gmail.com", // receiver
     subject: subject || "sent mail for benchmark", // subject
     html: body || "Email benchmark is Sent" // body
  }, function(error, response){  //callback
     if(error){
         console.log(error);
     }else{
         mailsSendCounter=mailsSendCounter+1
         if(mailsSendCounter==200){
           console.timeEnd("benchmark");
           console.log("Number of messages sent : "+mailsSendCounter );
         }
     }

     smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
  });
}
console.time("benchmark");
console.log("benchmark is running");
for(var i=0 ; i<200 ; i++){
sendMail(bodyEmail+i,mailName[0]+i+mailName[1])
}

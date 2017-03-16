var nodemailer = require("nodemailer");

// Vars to be edited by the company IT
var emailString = "smtps://mail%40assesstm.com:pass@smtp.gmail.com" // PUT YOUR SMTP HERE
var reportEmail = "report-smtp@gmail.com" // that will get the report but your mail may fail before that
var senderEmail = "sender@assesstm.com" // used to send emails
var numberOfEmailToSend = 200 // by default its 200
// Vars to be edited by the company IT


var mailsSendCounter = 0
var bodyEmail = "This email is part of smtp benchmark , contact your IT if you didn't schedule a benchmark </br> this is a email to mr mario"
var mailName = ["supermario", "@gmail.com"]

exitProcess = function(mailError) {
    var errorReportString = "we have benchmarked your smtp server </br> " + emailString + " and it did fail  </br> with only " + mailsSendCounter + " are sent out of " + numberOfEmailToSend + "<\br> please reschedule another benchmark"
    sendMail(errorReportString + "the error was: </br>" + mailError, reportEmail, " SMTP Benchmark report")
    console.log(errorReportString + " </br> the error was: </br>" + mailError);
    process.exit()

}

sendMail = function(body, mailToSendTo, subject) {

    var smtpTransport = nodemailer.createTransport(emailString);
    smtpTransport.sendMail({ //email options
        from: senderEmail || "Sender Name <benchmaker@assesstm.com>", // sender address.  Must be the same as authenticated user if using Gmail.
        to: mailToSendTo || "benchmaker-report@gmail.com", // receiver
        subject: subject || "SMTP mail benchmark", // subject
        html: body || "Email benchmark </br> this mail is part of a benchmark please report to your IT , if you didn't schedule smtp benchmark " // body
    }, function(error, response) { //callback
        if (error) {
            console.error(error);
            exitProcess(error);
        } else {
            mailsSendCounter = mailsSendCounter + 1
            if (mailsSendCounter == numberOfEmailToSend) {
                var end = Date.now();
                var timeSpent = (end - begin) + "ms to complete";
                console.log(timeSpent);
                console.log("Number of messages sent : " + mailsSendCounter);
                sendMail("we have benchmarked your smtp server </br> " + emailString + " for " + numberOfEmailToSend + " emails </br> and your score is " + timeSpent, reportEmail, "Benchmark report")
            }
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
    });
}
var begin = Date.now();
console.log("benchmark is running");
for (var i = 0; i < numberOfEmailToSend; i++) {
    sendMail(bodyEmail + i, mailName[0] + i + mailName[1])
}

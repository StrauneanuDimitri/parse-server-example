var api_key = 'key-b932884f8105196fbd78e3dd3304c028';
var domain = 'sandbox93a83c6dfe1b4404a8ca7f955389701d.mailgun.org';
var mailgun = require('mailgun')({apiKey: api_key, domain: domain});
 
Parse.Cloud.define("SendEmail", function(request, response) {
   mailgun.sendEmail({
    to: request.params.toText,
    from: request.params.fromText,
    subject: request.params.subjectText,
    text: request.params.textText
}, {
    success: function(httpResponse) {
        console.log(httpResponse);
        response.success("Email sent!");
    },
    error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
});
 
});

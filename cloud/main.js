require('cloud/sendEmail.js');

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

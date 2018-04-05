"use strict";

const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const request = require("request");

const app = express();

let PORT = process.env.PORT || 3000;


app.set('views', __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/public')));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.render("pages/index");
    });

app.get("/athobrae", function(req, res) {
    res.render("pages/athobrae");
    });

app.get("/contact", function(req, res) {
    res.render("pages/contact");
    });

app.get("/coming", function(req, res) {
    res.render("pages/coming");
    });

app.get("/gallery", function(req, res) {
    res.render("pages/gallery");
    });

app.get("/newsletter", function(req, res) {
    var options = { method: 'GET',
  url: 'https://us12.api.mailchimp.com/3.0/campaigns/aad27e435c/content',
  headers: 
   { 'postman-token': '270d5330-5d0a-0fd5-14bb-4cba7de76d76',
     'cache-control': 'no-cache',
     authorization: 'Basic YW55c3RyaW5nOjVmNWYyNWVkYzFkMjg1NzFmNGZjMjVjNGJmNmY1MjA0LXVzMTI=',
     'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body.Connection);
});
    res.render("pages/newsletter");
    });

app.get("/store", function(req, res) {
    res.render("pages/store");
    });

app.get("/home", function(req, res) {
    res.render("pages/home");
    });

app.get("/subscribe", function(req, res) {
    res.render("pages/subscribe");
    });

app.post("/contact", function(req, res) {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `
  console.log(output);

      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "simmons.diana93@gmail.com",
            pass: "M!sCMBr0wn4Ever!"
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Diana Simmons" <simmons.diana93@gmail.com>', // sender address
        // to: 'iamariellesimonee@gmail.com',
        // to: 'moonlitmoorgames@gmail.com',
        to: 'simmons.diana93@gmail.com',
        subject: 'New Contact from Website', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    });

app.post("/newsletter", function(req, res) {

addNewsletter(req.body.email);

res.end("success");
});

function addNewsletter (email) {
    var request = require("request");

var options = { method: 'POST',
  url: 'https://us12.api.mailchimp.com/3.0/lists/400b9d1d3c/members',
  headers: 
   { 'postman-token': '59fe2ea6-3543-d2a1-c4fc-55744eecd081',
     'cache-control': 'no-cache',
     authorization: 'Basic YW55c3RyaW5nOjFlMTU1YjFlZGQ5NWU3MTI0YTBkNzJkYmQ2YTg2Y2MwLXVzMTI=',
     'content-type': 'application/json' },
  body: 
   { email_address: email,
     status: 'subscribed' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}

app.post("/kickstarter", function(req, res) {

addKickstarter(req.body.email);


res.end("success");
});

function addKickstarter (email) {
    var request = require("request");

var options = { method: 'POST',
  url: 'https://us12.api.mailchimp.com/3.0/lists/8438f2d3ee/members',
  headers: 
   { 'postman-token': '59fe2ea6-3543-d2a1-c4fc-55744eecd081',
     'cache-control': 'no-cache',
     authorization: 'Basic YW55c3RyaW5nOjFlMTU1YjFlZGQ5NWU3MTI0YTBkNzJkYmQ2YTg2Y2MwLXVzMTI=',
     'content-type': 'application/json' },
  body: 
   { email_address: email,
     status: 'subscribed' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

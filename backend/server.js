const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv").config( { path: "../.env"} );
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let appURL = "http://localhost:3000/contact";

const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: "587",
    auth: {
        user: process.env.TEST_EMAIL,
        pass: process.env.TEST_PS
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages");
    }
});

app.post(appURL, (req, res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let name = `${firstName} ${lastName}`
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \n email:${email} \n message: ${message}`

    let mail = {
        from: name,
        to: process.env.TEST_EMAIL,
        subject: "New message from Portfolio contact form",
        text: content
    }

    transporter.sendMail(mail, (err,data) => {
        if (err) {
            res.json({
                msg: "fail"
            })
        } else {
            res.json({
                msg: "success"
            })
        }
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
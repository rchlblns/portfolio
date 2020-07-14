const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: "../.env" });
const path = require("path");
const port = process.env.PORT || 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow_origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// let appURL = "http://localhost:3000/contact/send";

let mailConfig;

if (process.env.NODE_ENV === "production") {
    mailConfig = {
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: process.env.REAL_EMAIL,
            pass: process.env.REAL_PS
        }
    }
} else {
    mailConfig = {
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: process.env.TEST_EMAIL,
            pass: process.env.TEST_PS
        }
    }
}

let transporter = nodeMailer.createTransport(mailConfig);

// const transporter = nodeMailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: "587",
//     auth: {
//         user: process.env.TEST_EMAIL,
//         pass: process.env.TEST_PS
//     }
// });

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages");
    }
});

//check API status
app.get("/api", (req, res) => {
    console.log("API Status: Running");
});

app.post("/api/send", (req, res) => {
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

    transporter.sendMail(mail, (err, data) => {
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

app.use(express.static(path.join(__dirname, "../client/build")))

// if (process.env.NODE_ENV === "production") {
    // Serve static files from the React frontend app
    // app.use(express.static(path.join(__dirname, "../client/build")));
    
    // Any route that doesn't match what's above, send back index.html
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname = "../client/build/index.html"))
    });
// }

app.listen(port, () => console.log(`Listening on port ${port}`));
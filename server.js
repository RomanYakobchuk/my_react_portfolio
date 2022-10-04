const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    from: "No reply",
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASS_USER
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const {firstName, lastName, email, phone, message} = req.body;
    const name = firstName + lastName;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
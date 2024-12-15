import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shivashishtiwari673@gmail.com",
    pass: "urkpravkbfcppjgj",
  },
});
const data = fs.readFileSync(
  path.resolve("src", "public", "html", "mailTemplate.html")
);
export const sendConfirmationMail = async (userEmail) => {
  const message = {
    from: "shivashishtiwari673@gmail.com",
    to: userEmail,
    subject: "Job Application Received",
    html: data,
  };

  transporter.sendMail(message, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(res);
    }
  });
};

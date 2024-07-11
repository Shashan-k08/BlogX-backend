const nodemailer = require("nodemailer");

const sendEmail = (option) => {
  const transporter = nodemailer.createTransport({
    service: "sandbox.smtp.mailtrap.io",
    port: "25, 465, 587 or 2525",
    auth: {
      user: "469f3a08205972",
      password: "********7ad2",
    },
  });

  const emailOptions = {
    from: "Shashank",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  transporter.sendMail(emailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;

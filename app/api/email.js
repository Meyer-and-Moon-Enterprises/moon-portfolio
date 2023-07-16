// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodeMailer from "nodemailer";
require("dotenv").config();

export default function handler(req, res) {
  if (req.body.sendit === true) {
    let transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = transporter.sendMail({
      from: '"Ian M" <ianm1837@gmail.com>',
      to: process.env.EMAIL_SEND_TO,
      subject: `IMPORTANT! - A message from ${req.body.emailAddress}`,
      text: req.body.emailBody,
    });

    res.status(200).json({ message: "Message sent" });
  } else {
    res.status(200).json({ message: "Message not sent", body: req.body });
  }
}

const nodemailer = require("nodemailer");

async function sendMail({ from, to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: `inShare <${from}>`,
    to,
    subject,
    text,
    html,
  });
}

module.exports = sendMail;

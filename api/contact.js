// /api/contact.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // replace with your email service
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'ndas1262000@gmail.com',
    subject: `New Message From ${name}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent');
  }
};
// /api/contact.js
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  const content = {
    to: 'ndas1262000@gmail.com',
    from: email,
    subject: `New Message From ${name}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent');
  }
};
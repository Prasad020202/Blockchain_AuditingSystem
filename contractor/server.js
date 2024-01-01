const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();

const PORT = process.env.PORT || 8082; // Use dynamic port assignment
// Use the cors middleware
app.use(cors());

// Configure bodyParser to parse JSON data
app.use(bodyParser.json());















// Create a transporter for Ethereal
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'joyce.blick@ethereal.email',
        pass: 'stzEZrjwdzehphWBTp'
    }
});















app.post('/send-email', async (req, res) => {
  const {auditoremail } = req.body;

  const mailOptionsAuditor = {
    from: 'cntractor_email@gmail.com',
    to: auditoremail,
    subject: 'Contract Information',
    text: `contractor wallet Address: ${contractAddress}`,
  };

  try {
    // Send emails using Ethereal
    const auditorInfo = await transporter.sendMail(mailOptionsAuditor);

    console.log('Emails sent to  auditor:');
    console.log('Auditor:', nodemailer.getTestMessageUrl(auditorInfo));

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Emails could not be sent' });
  }
});

app.listen(PORT, async () => {
 
 console.log('Server is running on port', PORT);
});

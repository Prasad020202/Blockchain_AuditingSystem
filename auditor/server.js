// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors middleware
// const app = express();

// const PORT = process.env.PORT || 8083; // Use dynamic port assignment

// // Use the cors middleware
// app.use(cors());

// // Configure bodyParser to parse JSON data
// app.use(bodyParser.json());

// // Create a transporter for Ethereal with hardcoded credentials
// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: 'joyce.blick@ethereal.email',
//     pass: 'stzEZrjwdzehphWBTp'
//   }
// });

// app.post('/send-email', async (req, res) => {
//   const { walletAddress, contractAddress, contractoremail, auditoremail, action } = req.body;

//   let mailOptionsContractor, mailOptionsAuditor;

//   if (action === 'approve') {
//     mailOptionsContractor = {
//       from: 'auditor_email@gmail.com',
//       to: 'contractor_email@gmail.com',
//       subject: 'Contract Information - Approval',
//       text: `Audit has been approved for the contract at `,
//     };

//     mailOptionsAuditor = {
//       from: 'auditor_email@gmail.com',
//       to: 'gov_email@gmail.com',
//       subject: 'Contract Information - Approval',
//       text: `Audit is successfully approved for the contract at `,
//     };
//   } else if (action === 'reject') {
//     mailOptionsContractor = {
//       from: 'auditor_email@gmail.com',
//       to: 'contractor_email@gmail.com',
//       subject: 'Contract Information - Rejection',
//       text: `Audit has been rejected for the contract at `,
//     };

//     mailOptionsAuditor = {
//       from: 'auditor_email@gmail.com',
//       to: 'gov_email@gmail.com',
//       subject: 'Contract Information - Rejection',
//       text: `Audit is rejected for the contract at `,
//     };
//   }

//   try {
//     // Send emails using Ethereal
//     const contractorInfo = await transporter.sendMail(mailOptionsContractor);
//     const auditorInfo = await transporter.sendMail(mailOptionsAuditor);

//     console.log('Emails sent to contractor and auditor:');
//     console.log('Contractor:', nodemailer.getTestMessageUrl(contractorInfo));
//     console.log('Auditor:', nodemailer.getTestMessageUrl(auditorInfo));

//     res.status(200).json({ message: 'Emails sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Emails could not be sent' });
//   }
// });

// app.listen(PORT, () => {
//   console.log('Server is running on port', PORT);
// });

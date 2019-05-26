//Dependencies
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

// Express
const app = express();
const PORT = process.env.PORT || 3050;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

//Nodemailer Transporter
const stork = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: process.env.GMAIL,
		pass: process.env.GMAIL_PASS
	},
});

//Nodemailer Messenger
app.post('/message', (req, res) => {
	stork.sendMail(
		{
			from: req.body.email,
			to: process.env.GMAIL,
			subject: 'Message From Portfolio Page',
			html: `From: ${req.body.email}\n\nMessage: ${req.body.message}`
		},
		function(err, info) {
			if (err) return res.status(500).send(err);
			res.json({ success: true });
		}
	);
});

//I liked the look of Geoff's port notification, so I stoooole it.
app.listen(PORT, () => {
	console.log(`==> 🌎  Listening on port ${PORT}.`);
});
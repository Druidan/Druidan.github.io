//Dependencies
require('dotenv').config();
const express = require('express');
// import express from 'express'
const compression = require('compression');
const mcache = require('memory-cache');
const nodemailer = require('nodemailer');

// Express
const app = express();
const PORT = process.env.PORT || 3050;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(compression())

// Our Cache Function - Largely based on the function written by Guilherme Oenning in the article 'Simple server side cache for Express.js with Node.js' - Source: "https://medium.com/the-node-js-collection/simple-server-side-cache-for-express-js-with-node-js-45ff296ca0f0"
const cache = (ttl) => {
	return (req, res, next) => {
		let key = `__express__${req.originalUrl}` || req.url
		let cachedBody = mcache.get(key)
		if (cachedBody) {
			res.send(cachedBody)
			return
		} else {
			res.sendResponse = res.send
			res.send = (body) => {
				mcache.put(key, body, duration * 1000);
				res.sendResponse(body)
			}
			next()
		}
	}
}

app.get('/', cache(20), (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

//Nodemailer Transporter
const stork = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_ADD,
		pass: process.env.GMAIL_PASS
	},
});

//Nodemailer Messenger
app.post('/message', (req, res) => {
	stork.sendMail(
		{
			from: process.env.GMAIL_ADD,
			to: process.env.GMAIL_ADD,
			subject: 'Message From Portfolio Page',
			html: `From: ${req.body.email}\n\nMessage: ${req.body.message}`
		},
		function(err, info) {
			if (err) return res.status(500).send(err);
			res.json({ success: true });
		}
	);
});

app.listen(PORT, () => {
	console.log(`==> 🌎  Listening on Port: ${PORT}.`);
});
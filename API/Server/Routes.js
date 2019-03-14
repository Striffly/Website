var SlotsFunctions = require('./SlotsFunctions')
var Config = require('./Config')
var Utils = require('./Utils')
var Auth = Config.admin

var nodemailer = require('nodemailer');

/*
    TODO:
	Back:   Authentification to post
		Handle assigness
	Front:  Good looking webiste

*/

module.exports = function(app, Timeline) {

	var slotFunctions = SlotsFunctions(Timeline)

	/* ADMIN GET REQUESTS */

	app.use('/admin', Utils.BasicAuth(Auth.username, Auth.password))

	app.get('/admin/timeline', (req, res) => {
		slotFunctions.order(function (slots) {
			res.render('Timeline', {slots : slots, admin:true})
		})
	})

	/*  POST REQUESTS: we're not using the API ones for now cause I'm still learning ReactJS
	*/

	app.post('/admin/timeline/add', (req, res) => {
		slotFunctions.add(req.body, function(error) {
			if (error) {
				res.status(501).send(error)
			} else {
				res.redirect('/admin/timeline')
			}
		})
	})

	app.post('/admin/timeline/:id/delete', (req, res) => {
		slotFunctions.delete(req.params.id, function() {
			res.redirect('/admin/timeline')
		})
	})

	app.post('/admin/timeline/:id/edit', (req, res) => {
		slotFunctions.edit(req.body, req.params.id, function() {
			res.redirect('/admin/timeline')
		})
	})

	app.post('/admin/timeline/:id/update', (req, res) => {
		console.log('in update', req.params.id)
		slotFunctions.update(req.body, req.params.id, function() {
			res.redirect('/admin/timeline')
		})
	})

	/* For debugging purposes */

	app.get('/admin/debug', (req, res) => {
		Timeline.find({}, function (err, slots) {
			slots.forEach(function(slot) {
				console.log(slot.startDate)
			})
		})
	})

	/* API ROUTES */

	app.get('/api/timeline', (req, res) => {
	    slotFunctions.order(function (slots) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send({ slots : slots, admin:false })
		})
	})

	/* These aren't working yet, I need to get better at ReactJS */

	app.get('/admin/api/timeline', (req, res) => {
		slotFunctions.order(function (slots) {
			res.send({ slots : slots, admin:true})
		})
	})

	app.post('/api/timeline/add', (req, res) => {
		slotFunctions.add(req.body, function(error) {
			if (error) {
				res.status(501).send(error)
			} else {
				res.sendStatus(200)
			}
		})
	})

	app.post('/api/timeline/:id/delete', (req, res) => {
		slotFunctions.delete(req.params.id, function(error) {
			if (error) {
				res.status(501).send(error)
			} else {
				res.sendStatus(200)
			}
		})
	})

	app.post('/api/timeline/:id/edit', (req, res) => {
		slotFunctions.edit(req.body, req.params.id, function(error) {
			if (error) {
				res.status(501).send(error)
			} else {
				res.sendStatus(200)
			}
		})
	})

	app.post('/api/timeline/:id/status', (req, res) => {
		slotFunctions.update(req.body, req.params.id, function(error) {
			if (error) {
				res.status(501).send(error)
			} else {
				res.sendStatus(200)
			}
		})
	})

	app.get('/api/contact', (req, res, next) =>{
		var nodemailer = require('nodemailer');
		var transporter = nodemailer.createTransport({
		  service: 'gmail',
		  auth: {
		      user: 'epicare.epitech@gmail.com',
		      pass: 'epicare2018'
		    }
		})

		var mailOptions = {
		  from: 'epicare.epitech@gmail.com',
		  to: 'epicare.epitech@gmail.com',
		  subject: '[Contact] ' + res.subject + ' ' + res.email,
		  text: res.content
		}

		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		      console.log(error);
			  res.status(401).send("error, you must specify subject, email and content")
		    } else {
		        console.log('Email sent: ' + info.response);
		      }
		})
		res.status(200).send("ok")
	})
}

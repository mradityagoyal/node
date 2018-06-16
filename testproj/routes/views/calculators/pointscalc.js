var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'calculator';

	locals.data = {
		title: "Calculator for Green Card Points",
    degrees: [
      {name: "High School Diploma", value: "HSDP"},
      {name: "Associate's Degree", value: "ASSO"},
      {name: "Bachelor's Degree", value: "BACH"},
      {name: "Graduate Degree", value: "GRAD"},
      {name: "Doctoral Degree", value: "DOCT"},
      {name: "Apprenticeship", value: "APPR"}
    ]
	};

	// Load the current post

	view.render('calculators/pointscalc');
};

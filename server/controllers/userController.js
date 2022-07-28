const { User } = require('../models');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
	try {
		const reqUser = req.body.username;
		const reqEmail = req.body.email;
		const saltRounds = 10;
		const password = await bcrypt.hash(req.body.password, saltRounds);
		const username = await User.find({ username: reqUser });
		const email = await User.find({ email: reqEmail });
		let userWEncryptedPass = { ...req.body, password: password };
		if (username.length == 0 && email.length == 0) {
			const newUser = await new User(userWEncryptedPass);
			newUser.save();
			return res.json({ ...newUser, message: `success` });
		}
		res.send({ message: 'username or email already taken' });
	} catch (error) {}
};

const login = async (req, res) => {
	try {
		let reqUser = req.body.username;
		let reqPass = req.body.password;
		const user = await User.find({ username: reqUser });
		console.log(reqPass, user[0].password);
		let passEquals = await bcrypt.compare(reqPass, user[0].password);
		if (passEquals) {
			let resp = { ...user[0]._doc, message: 'success' };
			delete resp.password;
			res.status(200).json(resp);
		} else {
			res.json({ message: 'invalid username or password' });
		}
	} catch (error) {
		res.json({ message: 'invalid username or password' });
	}
};

const updateUserPlan = async (req, res) => {
	console.log(req.body);
	try {
		const user = await User.findOneAndUpdate({ _id: req.body._id }, { plan: req.body.plan });
		res.json({ message: 'success' });
	} catch (error) {
		console.log(error);
		res.json({ message: 'error' });
	}
};

module.exports = { createUser, login, updateUserPlan };

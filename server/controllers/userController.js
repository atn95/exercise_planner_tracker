const { User } = require('../models');

const createUser = async (req, res) => {
	try {
		const reqUser = req.body.username;
		const reqEmail = req.body.email;
		const username = await User.find({ username: reqUser });
		const email = await User.find({ email: reqEmail });
		if (username.length == 0 && email.length == 0) {
			const newUser = await new User(req.body);
			newUser.save();
			return res.json({ ...newUser, message: `success` });
		}
		res.send({ message: 'username or email already taken' });
	} catch (error) {}
};

module.exports = { createUser };

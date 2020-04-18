const UserSession = require("../models/usersession");
const User = require("../models/user");

// Defining methods for the userSessionController
module.exports = {
    findAll: function (req, res) {
        UserSession
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    verify: function (req, res) {
        // Get the token
        const { query } = req;
        const { token } = query;
        // ?token=test
        // Verify the token is one of a kind and it's not deleted.
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                // DO ACTION
                return res.send({
                    success: true,
                    message: 'Good'
                });
            }
        });
    },
    signOut: function (req, res) {
        // Get the token
        const { query } = req;
        const { token } = query;
        // ?token=test

        // Verify the token is one of a kind and it's not deleted.
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, {
            $set: {
                isDeleted: true
            }
        }, null, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Good'
            });
        });

        UserSession
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    signIn: function (req, res) {
        console.log("req.body", req.body);

        const { body } = req;
        const { password } = body;
        let { email } = body;

        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        email = email.toLowerCase();
        email = email.trim();

        // Steps:
        // 1. Verify email doesn't exist
        // 2. Save
        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (users.length !== 1) {
                console.log("whoops!!!");
                return res.send({
                    success: false,
                    message: 'Error: No such user.'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Incorrect password.'
                });
            }

            // Otherwise correct user
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });
        });
    },
    update: function (req, res) {
        UserSession
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        UserSession
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
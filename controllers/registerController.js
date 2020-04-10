const UserPassport = require("../models/userpassport");

module.exports = {
    create: function(req, res) {
        const { username, password } = req.body
        // ADD VALIDATION
        User.findOne({ 'local.username': username }, (err, userMatch) => {
            if (userMatch) {
                return res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            const newUser = new User({
                'local.username': username,
                'local.password': password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                return res.json(savedUser)
            })
        })
    }
}
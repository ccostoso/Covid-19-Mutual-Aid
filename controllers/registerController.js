const UserPassport = require("../db/models/userpassport");

module.exports = {
    create: function(req, res) {
    
        const { displayName, email, password } = req.body
        // ADD VALIDATION
        UserPassport.findOne({ 'email': email }, (err, userMatch) => {
            console.log("USER MATCH", userMatch)
            if (userMatch) {
                return res.json({
                    error: `Sorry, already an account with the email address: ${email}`
                })
            }
            const newUser = new UserPassport({
                'email': email,
                'password': password,
                'displayName': displayName,
            })
            console.log("NEW USER RESPONSE",newUser)
            newUser.save((err, savedUser) => {
                if (err)  {
                    console.log('error!!!!', err)
                    return res.json(err);
                }
                console.log("I MADE IT", savedUser)
                return res.json(savedUser)
            })
        })
    }
}
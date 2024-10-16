require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require ('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
    regis : async (req,res) => {
        const data = req.body;

        // Check User regis
        // console.log(data);

        // Hash Password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt);
        data.password= hash;

        // Check user regis after hashing
        // console.log(data);

        const newUser = new User(data);
        newUser.save();

        res.json({
            message: "registration success",
        })
    },


    login : async (req, res) => {
        const data = req.body;
        console.log(data);
            
        //Search user in DB
        const user = await User.findOne({username:data.username}).exec();
        if(!user) {
            res.json({message:"Login failed"});
            return;
        }
    
        // console.log(data);
        console.log(user);

        //Check Password in DB dan input user result
        const checkPassword = bcrypt.compareSync(data.password, user.password);
        if(!checkPassword) {
            res.json({message: "Login failed"});
            return;
        }
        //token user
        const token = jwt.sign(
            {username : user.username}, //payload
            process.env.JWT_KEY); // secret signature key
        res.json ({
            message: "Login Success",
            token,
        });

    }
}
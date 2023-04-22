const User = require('../models/user');
const jwt = require('jsonwebtoken');

const generateToken = (id, name) => {
    return jwt.sign({id: id, name: name}, process.env.JWT_SECRET);
}

const addUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name: name,
        email: email,
        password: password
    });
    return res.status(201).json(user);
}

const loginUser =  async(req, res, next) => {
    const { email, password} = req.body;
   const user = await User.findAll({where: { 'email': email, 'password': password }});

   if(!user){
    return res.status(401).json({message: 'User Email or Password is Incorrect'});
   }
   console.log(user);
   const token = await generateToken(user[0]?.id, user[0]?.name);
   return res.json({message: 'User Successfully Login', token: token});
}

module.exports = {
    addUser,
    loginUser
}
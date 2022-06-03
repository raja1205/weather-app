const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

// POST Request: Registering a New User
const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    username,
    password: hashedPassword,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST Request: Login User
const loginUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await userModel.findOne({username: username})


        if(user)
        {
            const validatePassword = await bcrypt.compare(password, user.password)
            validatePassword? res.status(200).json(user): res.status(400).json("Wrong Password")
        }
        else{
            res.status(404).json("User does not exist")
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { registerUser, loginUser }
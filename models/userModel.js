const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname : {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String
    },
    {timestamps: true}
)

const userModel = mongoose.model("Users", UserSchema);
module.exports = userModel;
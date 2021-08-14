const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            required: true,
        },
        email: {
            type: String, 
            required: true,
            unique: true,
        },
        password: {
            type: String, 
            required: true,
        },
        isAdmin: {
            type: Boolean, 
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

//before user information is saved in database encrypt password for security
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next();
    }

    //create salt for encryption
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


//compares password that is entered into the function with the one that is in the database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User= mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    fname: {
        type: String,
        trim: true,
        default: null
    },
    lname: {
        type: String,
        trim: true,
        default: null
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    dob: {
        type: Date,
        default: null
    },
    gender: {
        type: String,
        default: null
    },
    avtar: {
        type: String,
        default: null
    },
    isDeleted: {
        type: Date,
        default: null
    },
    status: {
        type: Number,
        default: 1
    },
}, {
    timestamps: true
})


// validate Password
usersSchema.pre('save',async function(next){
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password,salt)
        this.password = hashPassword
        next()
    } catch (error) {
        next(error)
    }
})

// validate Password
usersSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

const UsersModal = mongoose.model('Users', usersSchema)

module.exports = UsersModal
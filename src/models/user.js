const { Schema, model } = require('mongoose');

const UserSchema = Schema ({
    fullname: {
        type: String,
        required: [true, 'Name is required'],
        match: [/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/]
    },
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    }
});

module.exports = model('User',UserSchema);
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { ROLES } from '../constant/model.constant.js';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

        // first check reading speed test ram kam karti hei db
        index: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.USER },
}, {
    timestamps: true
})

userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const UserModel = mongoose.model("users", userSchema);

export default UserModel;

// js doc strinfg
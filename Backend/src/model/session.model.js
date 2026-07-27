import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        index: true,
        unique: true,
    },
    refreshToken: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

sessionSchema.pre("save", async function () {
    if (!this.isModified("refreshToken")) return;

    const salt = await bcrypt.genSalt(10);
    this.refreshToken = await bcrypt.hash(this.refreshToken, salt);
});

sessionSchema.methods.compareRefreshToken = async function (refreshToken) {

    return await bcrypt.compare(refreshToken, this.refreshToken);
}

const SessionModel = mongoose.model('Session', sessionSchema);

export default SessionModel;
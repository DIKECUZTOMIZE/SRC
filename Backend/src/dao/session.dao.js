import SessionModel from "../model/session.model.js";

export const createSession = async ({ userId, refreshToken }) => {
    const session = await SessionModel.create({ userId, refreshToken });
    return session;
}


export const getSessionByUserId = async (userId) => {
    const session = await SessionModel.findOne({ userId });
    return session;
};




export const updateSessionByUserId = async (userId, { refreshToken }) => {
    const session = await SessionModel.findOne({ userId });

    if (!session) return null;

    session.refreshToken = refreshToken;

    await session.save();

    return session;
};



export const deleteSessionByUserId = async (userId) => {
    const session = await SessionModel.findOneAndDelete({ userId });
    return session;
}
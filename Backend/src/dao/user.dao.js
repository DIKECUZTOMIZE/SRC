import UserModel from "../model/user.model.js";



export const createUser = async ({ username, email, password }) => {
    const user = await UserModel.create({ username, email, password });
    return user;
}


export const getUserByEmailOrUsername = async ({ email, username }) => {
    const user = await UserModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    return user;
}


export const getUserById = async (userId) => {
    const user = await UserModel.findById(userId);
    return user;
}
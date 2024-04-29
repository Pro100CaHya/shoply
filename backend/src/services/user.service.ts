import { IUser } from "@models/index";
import { createUser, getUserById, getUserByUsername } from "@repositories/postgresql/user.repository";
import { hashPassword, hashValidate } from "@utils/index";

const register = async (user: IUser): Promise<IUser> => {
    try {
        const hashedPassword = await hashPassword(user.password);
        return await createUser({
            ...user,
            password: hashedPassword
        });
    } catch (error) {
        throw error;
    }
}

const login = async (username: string, password: string): Promise<IUser> => {
    try {
        const existedUser = await getUserByUsername(username);
        
        if (!existedUser) {
            throw new Error("Invalid username or password");
        }

        const isPasswordValid = hashValidate(password, existedUser.password);

        if (!isPasswordValid) {
            throw new Error("Invalid username or password");
        }

        return existedUser;
    } catch (error) {
        throw error;
    }
}

const getUserByUserId = async (id: number): Promise<IUser | null> => {
    try {
        return await getUserById(id);
    } catch (error) {
        throw error;
    }
}

export {
    register,
    login,
    getUserByUserId
}
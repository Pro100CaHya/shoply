import { IUser, USER_ROLE } from "@models/index";
import { prismaClient } from "@config/prisma.client";

const createUser = async (user: IUser): Promise<IUser> => {
    try {
        const createdUser = await prismaClient.user.create({
            data: {
                ...user,
                role: "CUSTOMER"
            }
        });
        
        return createdUser as IUser;
    } catch (error) {
        throw error;
    }
}

const getUserById = async (id: number): Promise<IUser | null> => {
    try {
        const user = await prismaClient.user.findUnique({
            where: {
                id
            }
        });

        return user as IUser;
    } catch (error) {
        throw error;
    }
}

const getUserByUsername = async(username: string): Promise<IUser | null> => {
    try {
        const user = await prismaClient.user.findUnique({
            where: {
                username
            }
        });

        return user as IUser;
    } catch (error) {
        throw error;
    }
}

export {
    createUser,
    getUserById,
    getUserByUsername
}
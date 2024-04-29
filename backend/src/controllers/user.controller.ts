import { Request, Response } from "express";

import { IUser } from "@models/index";
import { register, login, getUserByUserId } from "@services/user.service";
import { generateJwt } from "../utils";

const registerUser = async (req: Request, res: Response) => {
    try {
        const {
            username,
            email,
            password,
        }: IUser = req.body;

        const createdUser = await register({
            username,
            email,
            password
        });

        return res.status(201).json({
            message: "User created successfully",
            data: {
                user: {
                    username: createdUser.username,
                    email: createdUser.email,
                    role: createdUser.role
                }
            }
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Error registering user"
        });
    }
}

const loginUser = async (req: Request, res: Response) => {
    try {
        const {
            username,
            password
        }: IUser = req.body;

        const user = await login(username, password);

        return res.status(200).json({
            message: "User logged in successfully",
            data: {
                user: {
                    username: user.username,
                    email: user.email,
                    role: user.role
                },
                token: `Bearer ${generateJwt(user)}`
            }
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: `Error logging in user: ${(error as Error).message}`
        });
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await getUserByUserId(parseInt(id));

        return res.status(200).json({
            message: "User fetched successfully",
            data: {
                user
            }
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Error getting user by username"
        });
    }
}

export {
    getUser,
    loginUser,
    registerUser
}
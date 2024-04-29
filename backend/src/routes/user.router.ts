import { Router } from "express";

import {
    loginUser,
    registerUser,
    getUser
} from "@controllers/user.controller";

import {
    authenticateToken
} from "@middlewares/index";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.get("/:id", authenticateToken, getUser);

export {
    userRouter
}
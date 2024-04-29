import { sign } from "jsonwebtoken";

import { IUser } from "@/src/models";

const generateJwt = (user: IUser): string => {
    console.log(process.env.JWT_SECRET);

    return sign({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET as string, {
        expiresIn: "60m"
    });
}

export {
    generateJwt
}
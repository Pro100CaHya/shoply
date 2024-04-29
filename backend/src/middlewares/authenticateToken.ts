import { Request, Response, NextFunction } from "express";

import { verify } from "jsonwebtoken";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token: string | undefined = authHeader && authHeader.split(" ")[1];

    console.log(token);

    if (token === undefined) {
        return res.status(400).json({
            message: "Unauthorized",
        });
    }

    verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) {
            return res.status(403).json({
                message: "No access"
            });
        }

        next();
    });
}

export {
    authenticateToken
}
interface IUser {
    id?: number,
    username: string,
    email: string,
    password: string,
    role?: USER_ROLE,
    createdAt?: Date,
    updatedAt?: Date
}

enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

type USER_ROLE = keyof typeof UserRole;


export {
    IUser,
    USER_ROLE
}
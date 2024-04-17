interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    role: USER_ROLE,
    createdAt: Date,
    updatedAt: Date
}

enum USER_ROLE {
    CUSTOMER,
    ADMIN
}
import { compareSync } from "bcrypt";

const hashValidate = (password: string, hashedPassword: string): boolean => {
    return compareSync(password, hashedPassword);
}

export {
    hashValidate
}
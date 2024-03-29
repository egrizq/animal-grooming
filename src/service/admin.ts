import { prismaClient } from "../database/connectDB";
import { ResponseError } from "../helper/errorInstance";
import { CreateAdmin, LoginAdmin } from "../model/admin";
import { AdminValidate } from "../validators/admin";
import { Validator } from "../validators/validate";
import bcrypt from "bcrypt";

export class Admin {

    static async create(admin: CreateAdmin): Promise<string> {
        const validate = Validator.request(AdminValidate.REGISTER, admin)

        const checkUsername = await prismaClient.admin.findMany({
            where: {
                username: validate.username
            }
        })
        if (checkUsername.length !== 0) {
            throw new ResponseError(400, "Username already exist!")
        }

        validate.password = await bcrypt.hash(validate.password, 10);

        await prismaClient.admin.create({
            data: validate
        })

        return "Account successfully created!"
    }

    static async login(admin: LoginAdmin): Promise<string> {
        const validate = Validator.request(AdminValidate.LOGIN, admin)

        let user = await prismaClient.admin.findUnique({
            where: {
                username: validate.username
            }
        })
        if (!user) {
            throw new ResponseError(401, "Username or password is wrong!")
        }

        const validatePassword = await bcrypt.compare(validate.password, user.password)
        if (!validatePassword) {
            throw new ResponseError(401, "Username or password is wrong!")
        }

        return "Login success!"
    }

}
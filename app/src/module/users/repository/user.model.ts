import { Role } from '../type/role.enum'
import { SaveUserRequest } from '../users.request'

export class CreateUser {
    readonly mail: string
    readonly contact: {
        mail: string
    }

    constructor(mail: string) {
        this.mail = mail
        this.contact = {
            mail
        }
    }
}

export class CreateAdmin {
    readonly mail: string
    readonly name: string
    readonly contact: {
        mail: string
    }
    readonly role: Role = Role.ADMIN

    constructor(mail: string, name: string) {
        this.mail = mail
        this.name = name
        this.contact = {
            mail
        }
    }
}

export class SaveUser {
    readonly name: string

    constructor(user: SaveUserRequest) {
        const { contact, location } = user

        this.name = user.name
    }
}

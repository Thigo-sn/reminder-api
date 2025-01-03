import { Role } from "@/module/users/type/role.enum"

export type UserCurrent = {
    readonly id: string
    readonly role: Role
}

export type UserToken = {
    readonly sub: string
    readonly iat: number
    readonly exp: number
    readonly user: UserCurrent
}

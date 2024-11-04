import { UserRepository } from '../repository/user.repository'
import { UserResponse } from '../user.response'

export class GetCurrentProvider {
    constructor(private readonly repository: UserRepository) { }

    async run(): Promise<UserResponse> {
        const user = await this.repository.find({})

        return {
            id: '',
            mail: user.mail,
            name: user.name,
        }
    }
}

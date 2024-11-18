import { UserDocument } from './repository/user.schema'


export class UserResponse {
  readonly id: string
  readonly name: string

  constructor(user: UserDocument) {
    this.id = user.id
    this.name = user.name
  }
}



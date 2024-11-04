import { isNil } from 'lodash'

import { CreateUser } from '@/module/users/repository/user.model'
import { UserRepository } from '@/module/users/repository/user.repository'
import { UserDocument } from '@/module/users/repository/user.schema'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

export class MailAuthProvider {
  constructor(
    private readonly repository: UserRepository
  ) { }

  async run(request: AuthRequest): Promise<AuthResponse> {
    const { mail } = request

    const user = await this.save(mail)


    return new AuthResponse(user)
  }

  private async save(mail: string): Promise<UserDocument> {
    const user = await this.repository.find({ mail })

    if (isNil(user)) {
      return this.repository.create(new CreateUser(mail))
    }

    return user
  }
}

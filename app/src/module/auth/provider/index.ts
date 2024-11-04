import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { UserRepository } from '@/module/users/repository/user.repository'

import { RenewAuthProvider } from './renew.auth.provider'
import { VerifyAuthProvider } from './verify.auth.provide'

@Injectable()
export class AuthProvider {
  readonly renew: RenewAuthProvider = new RenewAuthProvider(this.jwt, this.config)
  readonly verify: VerifyAuthProvider = new VerifyAuthProvider(this.jwt, this.config, this.repository)

  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly repository: UserRepository
  ) { }
}

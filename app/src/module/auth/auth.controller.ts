import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'


import { AuthRequest, VerifyRequest } from './auth.request'
import { AuthResponse, TokenResponse } from './auth.response'
import { TokenRenewGuard } from './guard/token.renew.guard'
import { AuthProvider } from './provider'

@Controller('auth')
export class AuthController {
  constructor(private readonly provider: AuthProvider) { }

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  code(@Body() request: VerifyRequest): Promise<TokenResponse> {
    return this.provider.verify.run(request)
  }

  @Post('token')
  @HttpCode(HttpStatus.OK)
  @UseGuards(TokenRenewGuard)
  renew(): Promise<TokenResponse> {
    return this.provider.renew.run()
  }
}

import { Module } from '@nestjs/common';
import { VerifyRequest } from './auth.request';
import { AuthController } from './auth.controller';

@Module({
  providers: [VerifyRequest],
  controllers: [AuthController]
})
export class AuthModule { }

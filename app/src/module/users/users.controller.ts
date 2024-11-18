import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import { UserToken } from '@/module/type/auth.type'

import { User } from '@/decorator/user.decorator'

import { UserProvider } from './provider'
import { ListUserRequest, SaveUserRequest } from './users.request'
import { UserResponse } from './user.response'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) { }

  @Get(':id')
  get(@Param('id') id: string): Promise<UserResponse> {
    return this.provider.get.run(id)
  }

  @Get()
  list(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.list.run(request)
  }

  @Put()
  patch(@Body() request: SaveUserRequest, @User() token: UserToken): Promise<UserResponse> {
    const { user } = token

    return this.provider.patch.run(request, user)
  }

}


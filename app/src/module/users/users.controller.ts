import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './repository/user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body('name') name: string): Promise<User> {
        return this.usersService.create(name);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './repository/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(name: string): Promise<User> {
        const user = new this.userModel({ name });
        return user.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}

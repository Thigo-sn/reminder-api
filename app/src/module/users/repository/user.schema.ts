import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { Role } from '../type/role.enum'

export type UserDocument = HydratedDocument<User>


@Schema({
    id: true,
    timestamps: { createdAt: 'create', updatedAt: 'update' },
    collection: 'User'
})
export class User {
    @Prop({ type: String, unique: true, required: true })
    mail: string

    @Prop({ type: String })
    name?: string

    @Prop({ type: String, enum: Role, default: Role.MEMBER })
    role: Role = Role.MEMBER

    @Prop({ type: Boolean, default: true })
    enable: boolean = true
}

export const UserSchema = SchemaFactory.createForClass(User)

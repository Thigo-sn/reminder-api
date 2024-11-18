import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

import { User, UserDocument } from '@/module/users/repository/user.schema'

export type PostDocument = HydratedDocument<Post>

@Schema({
    id: true,
    timestamps: { createdAt: 'create', updatedAt: 'update' },
    collection: 'Post'
})
export class Post {

    @Prop({ type: String, required: true })
    name: string

    @Prop({ type: Types.ObjectId, ref: User.name, required: true })
    user: UserDocument

}

export const PostSchema = SchemaFactory.createForClass(Post)

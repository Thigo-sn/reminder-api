import { Types } from 'mongoose'

import { CreatePostRequest } from '../post.request'


export class CreatePost {
  readonly name: string
  readonly user: Types.ObjectId

  constructor(post: CreatePostRequest, user: string) {
    this.name = post.name
  }
}

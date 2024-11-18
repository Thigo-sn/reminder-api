import { NotFoundException } from '@nestjs/common'

import { isNil } from 'lodash'

import { PostResponse } from '../post.response'
import { PostRepository } from '../repository/post.repository'

export class GetPostProvider {
  constructor(private readonly repository: PostRepository) { }

  async run(id: string): Promise<PostResponse> {
    const post = await this.repository.find({})

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    return {} as PostResponse

  }
}
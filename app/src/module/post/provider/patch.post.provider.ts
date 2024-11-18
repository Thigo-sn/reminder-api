import { PatchPostRequest } from '../post.request'
import { PostResponse } from '../post.response'
import { PostRepository } from '../repository/post.repository'

export class PatchPostProvider {
  constructor(private readonly repository: PostRepository) { }

  async run(id: string, request: PatchPostRequest): Promise<PostResponse> {
    return {} as PostResponse

  }
}

import { User } from '@/module/users/repository/user.schema'

import { PostDocument } from './repository/post.schema'

export class PostResponse {
    readonly id: string
    readonly description: string
    readonly image: string[]
    readonly user: UserResponse

    constructor(post: PostDocument) {
        this.id = post.id
        this.user = new UserResponse(post.user)
    }
}

class UserResponse {
    readonly name: string

    constructor(user: User) {
        this.name = user.name
    }
}

export class PublishPostResponse {
    constructor(
        readonly id: string,
    ) { }
}

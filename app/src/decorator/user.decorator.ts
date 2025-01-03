import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { UserToken } from '@/module/type/auth.type'

export const User = createParamDecorator((_: unknown, context: ExecutionContext) => {
    const { user } = context.switchToHttp().getRequest<UserToken>()

    return user
})

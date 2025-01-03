import { Transform, TransformFnParams, Type } from 'class-transformer'
import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MaxLength,
    ValidateNested
} from 'class-validator'

export class ContactRequest {
    @IsEmail()
    readonly mail: string

    @IsString()
    @MaxLength(20)
    @IsOptional()
    readonly social?: string
}

export class ListUserRequest {
    @IsBoolean()
    @IsOptional()
    readonly enable?: boolean
}

export class SaveUserRequest {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly name: string

    @IsString()
    @MaxLength(400)
    @IsOptional()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly description?: string

    @Type(() => ContactRequest)
    @IsOptional()
    @ValidateNested()
    readonly contact: ContactRequest

    @IsString()
    readonly location: string
}

import { Transform, TransformFnParams, Type } from 'class-transformer'
import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsString,
    Max,
    Min,
    ValidateNested
} from 'class-validator'


export class PetRequest {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly name: string

    @IsNumber()
    @Min(1)
    @Max(20)
    readonly age: number

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly breed: string
}

export class ListPostRequest {
    @IsNumber()
    readonly page: number

    @IsNumber()
    readonly amount: number
}

export class CreatePostRequest {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly name: string

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly description: string

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    readonly image: string[]

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly location: string

    @IsBoolean()
    readonly publish: boolean
}

export class PatchPostRequest {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly title: string

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly description: string

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly image: string[]

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    readonly location: string
}

export class PublishPostRequest {
    @IsBoolean()
    readonly publish: boolean
}

import {
    IsString,
    IsIn,
    IsOptional,
    IsNumberString,
    ArrayUnique,
    IsEnum,
    IsNumber,
    ValidateNested,
    IsNotEmptyObject,
    IsNotEmpty,
    IsArray,
} from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { TodoUser } from './user.request';
import { TodoToCreate } from './../../../../domain/model/todo/todoToCreate.domain';
import { UsersOfTodo } from './../../../../domain/model/user/usersOfTodo.domain';
import { UserOfTodo } from './../../../../domain/model/user/userOfTodo.domain';
import { ID } from './../../../../domain/core/type/ID.type';

export class PostTodoRequest {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    title!: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    coverImage?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    detail?: string;

    @ApiProperty({
        type: Number,
        description: 'UTC Milliseconds',
    })
    @IsNumber()
    @IsNotEmpty()
    planedAt!: number;

    @ApiProperty({
        type: Number,
        description: 'Mins',
    })
    @IsNumber()
    @IsNotEmpty()
    expiredIn!: number; // 1-60 minutes

    @ApiProperty({
        type: Number,
        description: 'UTC Milliseconds',
    })
    @IsNumber()
    @IsNotEmpty()
    startedAt!: number;

    // @IsNotEmpty()
    @ApiPropertyOptional({ type: TodoUser, isArray: true })
    @ValidateNested({ each: true })
    @IsArray()
    @IsOptional()
    member?: TodoUser[];

    toDomain = (): TodoToCreate => {
        return new TodoToCreate(
            this.title,
            this.coverImage ?? null,
            this.detail ?? null,
            new Date(this.planedAt),
            this.expiredIn,
            new Date(this.startedAt),
            this.member === undefined
                ? new UsersOfTodo([])
                : new UsersOfTodo(
                      this.member.map(
                          v =>
                              new UserOfTodo(
                                  new ID(v.id),
                                  v.done === undefined ? false : v.done,
                              ),
                      ),
                  ),
        );
    };
}

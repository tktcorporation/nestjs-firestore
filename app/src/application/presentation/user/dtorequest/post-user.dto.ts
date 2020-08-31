import {
    IsString,
    IsIn,
    IsOptional,
    IsNumberString,
    ArrayUnique,
    IsEnum,
} from 'class-validator';
import { User } from '../../../../domain/model/user/user.domain';
import { ID } from './../../../../domain/core/type/ID.type';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PostUserRequest {
    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    nickname?: string;

    @ApiPropertyOptional({ type: String })
    @IsOptional()
    @IsString()
    introduction?: string;

    private constructor(nickname?: string, introduction?: string) {
        this.introduction = introduction;
        this.nickname = nickname;
    }
    toDomain = (): User => {
        return new User(
            new ID(),
            this.nickname ?? null,
            this.introduction ?? null,
        );
    };
}

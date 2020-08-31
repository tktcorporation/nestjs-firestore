import { IsString, IsNotEmpty } from 'class-validator';
import { ID } from 'src/domain/core/type/ID.type';
import { ApiProperty } from '@nestjs/swagger';

export class UserId {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '0PVDG0zEBg4gBQagEzSd',
        description: 'The autoincremented id of a user',
    })
    id: string;

    constructor(id: ID) {
        this.id = id.toString();
    }
}

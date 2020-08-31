import {
    IsString,
    IsIn,
    IsOptional,
    IsNumberString,
    ArrayUnique,
    IsEnum,
    IsNotEmpty,
    IsBoolean,
    IsBooleanString,
} from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class TodoUser {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    id!: string;

    @ApiProperty({ type: Boolean, default: false })
    @IsOptional()
    @IsBoolean()
    done?: boolean;
}

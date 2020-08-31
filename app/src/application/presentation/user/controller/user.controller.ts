import {
    Controller,
    Get,
    Body,
    Post,
    Query,
    Put,
    Param,
    ParseIntPipe,
} from '@nestjs/common';
import {
    ApiOperation,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { PostUserRequest } from '../dtorequest/post-user.dto';
import { UserId } from '../response/userIdResponse';
import { UserService } from '../../../service/user/user.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UserService) {}

    // @Get()
    // @ApiOperation({ summary: 'Get devices' })
    // @ApiOkResponse({
    //     type: GetDevicesClass,
    // })
    // async getDevices(@Query() dto: GetDevicesDto): Promise<GetDevicesClass> {
    //     const devices = await this.devicesService.getAll(dto.toDomain());
    //     return new GetDevicesClass({
    //         found: devices.found,
    //         currentPage: devices.currentPage,
    //         lastPage: devices.lastPage,
    //         data: devices
    //             .toArray()
    //             .map(v => new DeviceClass({ ...v, use: v.use.toString() })),
    //     });
    // }

    @Post()
    @ApiOperation({ summary: 'Create a user' })
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: UserId,
    })
    async create(@Body() dto: PostUserRequest): Promise<UserId> {
        const result = await this.service.create(dto.toDomain());
        return new UserId(result);
    }
}

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
import { TodoService } from './../../../../application/service/todo.service';
import { PostTodoRequest } from '../request/post.request';
import { PutTodoRequest } from '../request/put.request';
import { TodoId } from '../response/todoId.response';
import { ID } from './../../../../domain/core/type/ID.type';

@Controller('todos')
export class TodosController {
    constructor(private readonly service: TodoService) {}

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
    @ApiOperation({ summary: 'Create a todo' })
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: TodoId,
    })
    async create(@Body() dto: PostTodoRequest): Promise<TodoId> {
        const result = await this.service.create(dto.toDomain());
        return new TodoId(result);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Create a todo' })
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: TodoId,
    })
    async replace(
        @Body() dto: PutTodoRequest,
        @Param('id') id: string,
    ): Promise<TodoId> {
        const result = await this.service.replace(dto.toDomain(new ID(id)));
        return new TodoId(result);
    }
}

import { Module } from '@nestjs/common';
import { TodosController } from './../../application/presentation/todo/controller/todo.controller';
import { TodoService } from './../../application/service/todo.service';

@Module({
    controllers: [TodosController],
    providers: [TodoService],
})
export class TodoModule {}

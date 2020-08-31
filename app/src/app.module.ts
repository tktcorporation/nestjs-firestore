import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { TodoModule } from './module/todo/todo.module';

@Module({
    imports: [UserModule, TodoModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

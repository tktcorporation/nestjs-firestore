import { Module } from '@nestjs/common';
import { UsersController } from './../../application/presentation/user/controller/user.controller';
import { UserService } from './../../application/service/user/user.service';

@Module({
    controllers: [UsersController],
    providers: [UserService],
})
export class UserModule {}

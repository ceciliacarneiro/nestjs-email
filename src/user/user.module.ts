import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypedEventEmitter } from 'src/email/event-emitter/typed-event-emitter.class';

@Module({
  imports:[],
  controllers: [UserController],
  providers: [UserService, TypedEventEmitter],
})
export class UserModule {}

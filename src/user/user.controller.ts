import { Body, Controller, Post } from '@nestjs/common';
import { TypedEventEmitter } from 'src/email/event-emitter/typed-event-emitter.class';
import { User } from 'src/interfaces/user.interface';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(
    private readonly eventEmitter: TypedEventEmitter,
    private readonly userService: UserService
    ) {}

  @Post()
  create(@Body() user: User): User {
    this.eventEmitter.emit('user.welcome', {
      name: user.name,
      email: user.email,
    });

    this.eventEmitter.emit('user.verify-email', {
      name: user.name,
      email: user.email,
      otp: '****', // generate a random OTP
    });

    return this.userService.create(user);
  }
}
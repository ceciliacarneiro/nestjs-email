import { Injectable } from '@nestjs/common';

import { User } from 'src/interfaces/user.interface';

@Injectable()

export class UserService {
  private users:User[] = [];


  create(user: User): User {
   this.users.push(user);
   return user
  }

 
}

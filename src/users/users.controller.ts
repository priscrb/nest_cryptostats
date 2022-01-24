import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body() createUserRequest: CreateUserRequest,
  ): Promise<void> {
    return this.usersService.createUser(createUserRequest);
  }
}

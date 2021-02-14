import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { MongoExceptionFilter } from 'src/common/exceptions/mongo-exception.filter';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Post('search')
  async search(@Body() searchUserDto: SearchUserDto): Promise<User[]> {
    return await this.usersService.search(searchUserDto);
  }
}
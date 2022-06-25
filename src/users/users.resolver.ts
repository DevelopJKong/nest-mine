import { UsersService } from './users.service';
import { Query } from '@nestjs/graphql';

export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }




}

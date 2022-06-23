import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation(returns => CreateAccountOutput)
  async createAccount(
      @Args('input') createAccountInput: CreateAccountInput
  ):Promise<CreateAccountOutput> {
    return this.usersService.createAccount(createAccountInput);
  }
  


}

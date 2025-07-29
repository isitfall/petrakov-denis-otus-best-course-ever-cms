import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './graphql/user.type';
import { CreateUserInput } from './graphql/create-user.input';
import { UpdateUserInput } from './graphql/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  async create(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User | null> {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => User, { name: 'updateUser' })
  async update(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User | null> {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation(() => Boolean, { name: 'removeUser' })
  async remove(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    await this.usersService.remove(id);
    return true;
  }
} 
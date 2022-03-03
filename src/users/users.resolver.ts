import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User, UserInput } from 'src/graphql';
import { MailModule } from 'src/mail/mail.module';
import { mapUserEntityToDto, mapUserToEntity } from 'src/mapper';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolver {
  constructor(private UsersService: UsersService) {}

  @Query(() => String)
  async users() {
    return await this.UsersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    const userEntity = await this.UsersService.find(id);
    return mapUserEntityToDto(userEntity);
  }

  @Mutation(() => User)
  async userCreate(@Args('data') userInput: UserInput) {
    console.log('data', userInput);
    // new MailModule();
    return await this.UsersService.create(mapUserToEntity(userInput));
  }

  @Mutation(() => User)
  async userUpdate(@Args('data') userInput: UserInput, @Args('id') id: string) {
    return this.UsersService.update(id, mapUserToEntity(userInput));
  }

  @Mutation(() => Boolean)
  async userDelete(@Args('id') id: string) {
    return await this.UsersService.delete(id);
  }

  @Mutation(() => String)
  async signUp(@Args('user') userInput: UserInput) {
    return await this.UsersService.userSign(mapUserToEntity(userInput));
  }
}

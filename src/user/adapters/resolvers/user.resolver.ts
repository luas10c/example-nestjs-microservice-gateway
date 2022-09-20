import { Resolver, Query, Args } from '@nestjs/graphql'

import { UserAdapterService } from '../services/user.adapter.service'

import {
  UserByIdInput,
  UserByEmailInput,
  UserByUsernameInput
} from '#/common/types/inputs/user'
import { UserOutput } from '#/common/types/outputs/user'

@Resolver()
export class UserResolver {
  constructor(private readonly userAdapterService: UserAdapterService) {}

  @Query(() => [UserOutput])
  async getUsers(): Promise<UserOutput[]> {
    const users = await this.userAdapterService.getUsers()
    return users
  }

  @Query(() => UserOutput)
  async getUserById(
    @Args('getUserByIdInput') data: UserByIdInput
  ): Promise<UserOutput> {
    const { id } = data
    const user = await this.userAdapterService.getUserById(id)
    return user
  }

  @Query(() => UserOutput)
  async getUserByEmail(
    @Args('getUserByEmailInput') data: UserByEmailInput
  ): Promise<UserOutput> {
    const { email } = data
    const user = await this.userAdapterService.getUserByEmail(email)
    return user
  }

  @Query(() => UserOutput)
  async getUserByUsername(
    @Args('getUserByUsername') data: UserByUsernameInput
  ): Promise<UserOutput> {
    const { username } = data
    const user = await this.userAdapterService.getUserByUsername(username)
    return user
  }
}

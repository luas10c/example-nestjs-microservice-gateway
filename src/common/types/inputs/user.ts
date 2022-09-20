import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UserByIdInput {
  @Field()
  id: string
}

@InputType()
export class UserByEmailInput {
  @Field()
  email: string
}

@InputType()
export class UserByUsernameInput {
  @Field()
  username: string
}

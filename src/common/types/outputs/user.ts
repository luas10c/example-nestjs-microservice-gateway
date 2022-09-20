import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class UserOutput {
  @Field()
  id: string

  @Field()
  full_name: string

  @Field()
  email: string
}

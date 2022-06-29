import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@InputType('UserInput')
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

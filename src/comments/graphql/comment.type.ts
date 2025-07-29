import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;

  @Field()
  userId: string;

  @Field()
  lessonId: string;

  @Field()
  createdAt: Date;
} 
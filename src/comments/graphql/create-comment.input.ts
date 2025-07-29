import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  text: string;

  @Field()
  userId: string;

  @Field()
  lessonId: string;
} 
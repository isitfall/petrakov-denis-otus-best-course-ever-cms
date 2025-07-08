import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment {
  @Prop({ required: true })
  text: string;

  @Prop({ type: String, ref: 'User' })
  userId: string;

  @Prop({ type: String, ref: 'Lesson' })
  lessonId: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop([String])
  tags: string[];

  @Prop({ enum: ['beginner', 'intermediate', 'advanced'] })
  difficulty: string;

  @Prop({ type: String, ref: 'User' })
  authorId: string;

  @Prop([String])
  files: string[];

  @Prop([String])
  lessonsId: string[];

  @Prop([String])
  usersId: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);

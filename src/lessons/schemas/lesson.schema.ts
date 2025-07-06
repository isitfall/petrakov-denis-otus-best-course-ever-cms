import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Lesson {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  videoUrl?: string;

  @Prop([String])
  files?: string[];

  @Prop([String])
  links?: string[];

  @Prop({ type: String, ref: 'Course' })
  courseId: string;

  @Prop([String])
  comments: string[];

  @Prop([String])
  ratings: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  async create(dto: {
    text: string;
    userId: string;
    lessonId: string;
  }): Promise<Comment> {
    const createdComment = new this.commentModel(dto);
    return createdComment.save();
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async findOne(id: string): Promise<Comment> {
    const comment = await this.commentModel.findById(id).exec();
    if (!comment) throw new Error('Comment not found');
    return comment;
  }

  async update(id: string, text: string): Promise<Comment | null> {
    return this.commentModel.findByIdAndUpdate(id, { text }, { new: true });
  }

  async remove(id: string): Promise<any> {
    return this.commentModel.findByIdAndDelete(id);
  }
}

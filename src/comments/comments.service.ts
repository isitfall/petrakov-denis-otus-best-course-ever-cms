import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(comment: Partial<Comment>): Promise<Comment> {
    const newComment = this.commentRepository.create(comment);
    return this.commentRepository.save(newComment);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentRepository.findOne({ where: { id } });
  }

  async update(id: string, comment: Partial<Comment>): Promise<Comment> {
    await this.commentRepository.update(id, comment);
    return this.commentRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.commentRepository.delete(id);
  }
}

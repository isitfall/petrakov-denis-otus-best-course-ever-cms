import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentsResolver } from './comments.resolver';
import { Comment } from './comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentsService, CommentsResolver],
  controllers: [CommentsController],
})
export class CommentsModule {}

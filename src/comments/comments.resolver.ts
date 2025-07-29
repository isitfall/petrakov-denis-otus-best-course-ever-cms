import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './graphql/comment.type';
import { CreateCommentInput } from './graphql/create-comment.input';
import { UpdateCommentInput } from './graphql/update-comment.input';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Query(() => [Comment], { name: 'comments' })
  async findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Query(() => Comment, { name: 'comment' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Comment | null> {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => Comment, { name: 'createComment' })
  async create(@Args('createCommentInput') createCommentInput: CreateCommentInput): Promise<Comment> {
    return this.commentsService.create(createCommentInput);
  }

  @Mutation(() => Comment, { name: 'updateComment' })
  async update(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ): Promise<Comment | null> {
    return this.commentsService.update(id, updateCommentInput);
  }

  @Mutation(() => Boolean, { name: 'removeComment' })
  async remove(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    await this.commentsService.remove(id);
    return true;
  }
} 
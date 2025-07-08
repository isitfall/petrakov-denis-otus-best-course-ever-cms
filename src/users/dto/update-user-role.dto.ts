import { IsEnum } from 'class-validator';

export class UpdateUserRoleDto {
  @IsEnum(['user', 'author', 'admin'])
  role: string;
}

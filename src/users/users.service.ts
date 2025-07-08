import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(dto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ email: dto.email });
    if (existingUser) throw new Error('Email already exists');

    const user = new this.userModel(dto);
    return user.save();
  }

  async update(id: string, dto: UpdateUserDto): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async remove(id: string): Promise<any> {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) throw new Error('User not found');
    return result;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async updateRole(id: string, dto: UpdateUserRoleDto): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async updateStatus(
    id: string,
    dto: UpdateUserStatusDto,
  ): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }
}

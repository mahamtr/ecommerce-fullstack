import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findOne(user_id: string): Promise<User> {
    return this.userModel.findOne({ user_id });
  }

  find(): Promise<User[]> {
    return this.userModel.find();
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ user_id: id }, updateUserDto);
  }
}

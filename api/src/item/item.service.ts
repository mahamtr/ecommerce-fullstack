import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './entities/item.entity';
import { Model } from 'mongoose';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  create(createItemDto: CreateItemDto): Promise<Item> {
    const createdUser = new this.itemModel(createItemDto);
    return createdUser.save();
  }

  findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  findOne(id: number): Promise<Item> {
    return this.itemModel.findById(id);
  }

  findRecentlyAdded(): Promise<Item[]> {
    return this.itemModel.find({}, ['addedDate'], {
      skip: 0,
      limit: 10,
    });
  }

  findRecommended(): Promise<Item[]> {
    return this.itemModel.aggregate([{ $sample: { size: 10 } }]);
  }

  //todo refactor this to one service
  findByCategory(category: string): Promise<Item[]> {
    return this.itemModel.find({ category });
  }

  findByName(name: string): Promise<Item[]> {
    return this.itemModel.find({ name });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto);
  }

  remove(id: number) {
    return this.itemModel.findByIdAndDelete(id);
  }
}

import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

export class Item {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  discountPercent: number;

  @Prop()
  addedDate: string;

  @Prop()
  blobUrls: string[];

  @Prop()
  stockQty: number;

  @Prop()
  category: number[];
}

export const ItemSchema = SchemaFactory.createForClass(Item);

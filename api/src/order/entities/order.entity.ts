import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  user_id: string;

  @Prop()
  paymentAmount: string;

  @Prop()
  Address: string;

  @Prop()
  postCode: number;

  @Prop()
  date: string;

  @Prop(
    raw([
      {
        itemId: { type: Number },
        quantity: { type: Number },
      },
    ]),
  )
  cartDetails: Record<string, any>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

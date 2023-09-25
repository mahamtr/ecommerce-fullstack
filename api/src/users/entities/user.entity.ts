import { Prop, SchemaFactory, Schema, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  user_id: string;

  @Prop()
  email: string;

  @Prop()
  email_verified: boolean;

  @Prop()
  name: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  picture: string;

  @Prop()
  username: string;

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

export const UserSchema = SchemaFactory.createForClass(User);

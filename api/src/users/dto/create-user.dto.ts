export class CreateUserDto {
  user_id: string;
  email: string;
  email_verified: boolean;
  name: string;
  phoneNumber: string;
  picture: string;
  username: string;
  cartDetails: ClassDetails[];

  public constructor(init?: Partial<CreateUserDto>) {
    Object.assign(this, init);
  }
}

export interface ClassDetails {
  itemId: number;
  quantity: number;
}

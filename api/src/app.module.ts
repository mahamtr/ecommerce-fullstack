import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StripeModule } from './stripe/stripe.module';
import { Auth0Module } from './auth0/auth0.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), StripeModule, Auth0Module, UsersModule,MongooseModule.forRoot(process.env.MONGO_STRING_CONNECTION), ItemModule, OrderModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StripeModule } from './stripe/stripe.module';
import { Auth0Module } from './auth0/auth0.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), StripeModule, Auth0Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

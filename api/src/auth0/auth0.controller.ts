import { Controller, Post, Req } from '@nestjs/common';
import { Auth0Service } from './auth0.service';

@Controller('Auth0')
export class Auth0Controller {
  constructor(private readonly auth0Service: Auth0Service) {}

  @Post("HookPostRegister")
    async HookPostRegisterStartSession(@Req() request: Request) {
    
      const {email,email_verified,name,phoneNumber,picture,user_id,username} = request.body['user'];
      console.log(email);
      // TODO service add user to mongo

    }
}

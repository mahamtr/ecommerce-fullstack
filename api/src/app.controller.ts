import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authentication/auth.guard';
import { PermissionsGuard } from './authentication/perm.guard';
import { UPermissions } from './authentication/Permissions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("api/messages/public")
  getFree(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthorizationGuard)
  @Get("/api/messages/protected")
  getProtected(): string {
    return this.appService.getHello();
  }

  @UseGuards(PermissionsGuard([UPermissions.READ_ADMIN]))
  @UseGuards(AuthorizationGuard)
  @Get("/api/messages/admin")
  getAdmin(): string {
    return this.appService.getHello();
  }
}

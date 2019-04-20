import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sync')
  getSync(): string {
    return this.appService.somethingSync();
  }

  @Get('async')
  async getAsync(): Promise<string> {
    return this.appService.somethingAsync();
  }

  @Get('moreasync')
  async getMoreAsync(): Promise<string> {
    return this.appService.somethingElseAsync();
  }

}

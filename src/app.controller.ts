import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return {
      title: 'Nest app',
      msg: 'send form',
    };
  }

  @Post('/')
  @Render('index')
  send(@Body() form: any) {
    return {
      title: 'Nest form',
      msg: JSON.stringify(form)
    }
  }
}

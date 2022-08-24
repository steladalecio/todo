
import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class todoController {
  @Get()
  findAll(): string {
    return 'This action returns all todo';
  }
}
@Get('name')
findAll() {
  return 'úSUARIO CADASTRADO';
}
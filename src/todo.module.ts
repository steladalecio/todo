todo.module.tsJS

import { Module } from '@nestjs/common';
import { todoController } from './todo.controller';
import { todoService } from './todo.service';

@Module({
  controllers: [todoController],
  providers: [todoService],
})
export class todoModule {}
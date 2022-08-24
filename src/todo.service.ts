
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { todoController } from './todo.controller';

@Injectable()
export class todoService {
  private readonly todo: todo[] = [];

  create(todo: todoService) {
    this.todo.push(todo);
  }

  findAll(): todo[] {
    return this.todoController;
  }
}
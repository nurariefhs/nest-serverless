import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('create')
  async createTodo(){
    return {
      message: 'New todo was created'
    }
  }

  @Get('update/:id')
  async updateTodo(
    @Param('id') id: string
  ){
    return {
      message: `Todo with id: ${id} was updated`
    }
  }
}

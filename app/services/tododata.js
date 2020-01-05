import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TododataService extends Service {

  get todolength(){
    return this.todolist.length
  }

  @tracked todolist = [
    {name:"First Todo", completed: false},
    {name:"Second Todo", completed: false},
    {name:"Third Todo", completed: false}
  ]

  addtodo(todo){
    this.todolist.addObject(todo);
  }

}

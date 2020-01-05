import Controller from '@ember/controller';
import { action } from '@ember/object'
import {inject as service } from '@ember/service'

export default class AddTodoController extends Controller {
  @service tododata;

  @action
  addTodo(name){
    this.tododata.addtodo({name:name, completed: false});
    this.transitionToRoute('index');
  }

}

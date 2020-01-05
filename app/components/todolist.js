import Component from '@glimmer/component';
import {inject as service } from '@ember/service'

export default class TodoList extends Component {
  @service tododata;
  testvalue = "hello"
}

import _listsService from "../Services/ListsService.js";
import _store from "../store.js"


//TODO Don't forget to render to the screen after every data change.
function _draw() {
  let lists = _store.State.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("items").innerHTML = template

}
console.log("hello from service");



//Public
export default class ListsController {
  constructor() {

    _draw();
  }

  addList(event) {
    event.preventDefault();

    let freshList = {
      name: event.target.name.value,
      color: event.target.color.value,

    }
    _listsService.addList(freshList)

    _draw();
  }

  deleteList(id) {

    _listsService.deleteList(id);

    _draw();
  }

  addItem(event, listId) {
    event.preventDefault();
    let item = event.target.item.value;
    _listsService.addItem(item, listId)
    _draw();
  }


  deleteItem(itemId, index) {
    _listsService.deleteItem(itemId, index)
    _draw();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}

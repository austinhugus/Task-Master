import _listService from "../Services/ListService.js";
import _store from "../store.js"


//TODO Don't forget to render to the screen after every data change.
function _draw() {
  let lists = _store.State.lists
  let template = '';
  _store.State.lists.forEach((i) => (template += i.Template));
  document.getElementById("items").innerHTML = template;
}


//Public
export default class ListController {
  constructor() {

    _draw();
  }
  addList(event) {
    event.preventDefault()
    let freshList = {
      name: event.target.name.value
    }
    _draw()
  }

  removeList(id) {
    event.preventDefault()
    _listService.removeList(id);
    _draw()
  }

  addItem(event, itemId) {
    event.preventDefault()
    let item = event.target.item.value
    _draw()
  }


  removeItem(itemId, index) {
    event.preventDefault()
    _listService.removeItem(itemId, index)
    _draw()
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
console.log('hello from controller');

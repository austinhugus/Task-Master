import List from "../Models/List.js";
import _store from "../store.js"




//Public
class ListService {


  addList(freshList) {
    let list = new List(freshList)
    _store.State.lists.push(list)
  }

  removeList(id) {
    _store.State.lists = _store.State.lists.filter(i => i.id != id)

  }

  addItem(item, listId) {
    let list = _store.State.lists.find(l => l.id == listId)
    list.items.push(item)
  }

  removeItem(listId, index) {
    let list = _store.State.lists.find(i => i.id == listId)
    list.items.splice(index, 1)
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}
console.log("Hello from Service");

const _listService = new ListService();
export default _listService;

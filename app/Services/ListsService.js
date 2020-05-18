import List from "../Models/List.js";
import _store from "../store.js";





//Public
class ListsService {

  addList(freshList) {
    let list = new List(freshList)
    _store.State.lists.push(list)
    _store.saveState()
  }

  deleteList(id) {
    _store.State.lists = _store.State.lists.filter(l => l.id != id)
    window.confirm("Are you sure you want to delete?")
    _store.saveState()

    return;
  }

  addItem(item, listId) {
    let list = _store.State.lists.find(l => l.id == listId)
    list.items.push(item)
    _store.saveState()
  }

  deleteItem(listId, index) {
    let list = _store.State.lists.find(l => l.id == listId)
    list.items.splice(index, 1);
    window.confirm("Are you sure you want to delete?")
    _store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}
console.log("Hello from Service");

const SERVICE = new ListsService();
export default SERVICE;

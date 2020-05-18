import { generateId } from "../utils.js";

export default class List {
    constructor(data) {
        //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
        this.id = data.id || generateId();
        this.name = data.name;
        this.color = data.color
        /**
            * @type {String[]}
            */
        this.items = data.items || []

    }
    //Be sure to add the methods needed to create the view template for this model
    //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
    get Template() {
        return /*html*/`
        <div class="col-3">
        <div class="card shadow taller">
             <div class="card-body d-flex flex-column zero extend" style="padding-top: 0%;">
              <i class="fas fa-trash text-danger align-self-end action zero"
                  onclick="app.listsController.deleteList('${this.id}')"></i>
                <h4 class="bungee2 card-title hcolor text-center pb-5" style="background-color: ${this.color}">${this.name}</h4>
                <ul class="pl-3">
                    ${this.ItemsTemplate}
                </ul>
                <form onsubmit="app.listsController.addItem(event, '${this.id}')">
                    <div class="form-group cinzel">
                        <input type="text" class="form-control" name="item" id="item"
                            aria-describedby="helpId" placeholder="Add Item" required>
                        <button type="submit" class="btn btn-outline-success ml-2"><i
                                class="fas fa-plus "></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        `
    }


    get ItemsTemplate() {
        let template = ""
        this.items.forEach((item, index) => {
            template += /*html*/`
            <li><input type="checkbox">
            ${item}
                <i class="fas fa-trash text-danger action pl-5 pt-4 "
                    onclick="app.listsController.deleteItem('${this.id}', ${index})"></i>
            </li>
            `
        })

        return template;
    }

}

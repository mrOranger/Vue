const storageKey = 'todoApp';

const app = new Vue({
    el: "#app",
    template: `
    <div>
        <div class="row center">
            <h1 class="title">{{appName}}</h1>
            <h3 class="elems">Cose da fare: {{elemsTodo}}</h3>
        </div>
        <div class="row">
            <!-- FORM inserimento dati -->
            <div id="form" class="row col s8 m8 l8 offset-s2 offset-m2 offset-l2">
                <form v-on:submit.prevent="inserisciElemento">
                    <div class="row">
                        <div class="center col m4 offset-m4 l4 offset-l4 s4 offset-s4">
                            <div class="input-field">
                                <input v-model="newElem.name" type="text" class="validate" id="name"
                                    placeholder="Inserisci un nome ..." />
                                <label for="name">Nome: </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field">
                            <input v-model="newElem.description" type="text" class="validate" id="description"
                                placeholder="Inserisci una descrizione ..." />
                            <label for="description">Descrizione: </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class = "switch col s6 m6 l6 center">
                            <label>
                                Da fare
                                <input v-model = "newElem.todo" type = "checkbox"/>
                                <span class = "lever"></span>
                                Fatto
                            </label>
                        </div>
                        <div class = "col s6 m6 l6 center">
                            <button type="submit" class="btn waves-effect waves-light">Aggiungi<i class="material-icons right">send</i></button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- Tabella per la stampa -->
            <div class="row col s8 m8 l8 offset-s2 offset-m2 offset-l2">
                <table class="responsive-table centered highlight">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrizione</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in elems" v-bind:class = "{completed: computeItem(item)}">
                            <td>{{item.name}}</td>
                            <td>{{item.description}}</td> 
                            <td v-on:click = "deleteItem(index)"><i class="mdc-icon-button material-icons">delete</i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`,
    created: function(){
        this.elems = JSON.parse(localStorage.getItem(storageKey) || '[]');
    },
    methods: {
        inserisciElemento: function(){
            if(this.newElem.name === "" || this.newElem.description === ""){
                toastr.error("Prego, compila i campi prima");
            }else{
                this.elems.push({
                    name: this.newElem.name,
                    description: this.newElem.description,
                    todo: this.newElem.todo
                });
                localStorage.setItem(storageKey, JSON.stringify(this.elems));
                toastr.success("Elemento inserito con successo!");
            }
            this.newElem.name = "";
            this.newElem.description = "";
        },
        computeItem: function(val){
            return val.todo;
        },
        deleteItem: function(val){
            let items = JSON.parse(localStorage.getItem(storageKey));
            let newItems = new Array();
            if((items.length === 1) && (val == items.length - 1)){
                localStorage.setItem(storageKey, JSON.stringify([]));
                this.elems = [];
            }else{
                for(let i = items.length - 1; i > 0; i--){
                    if(i == val){
                        i--;
                    }
                    newItems.push(items[i]);
                }
            }
            this.elems = newItems;
            localStorage.setItem(storageKey, JSON.stringify(newItems));
        }
    },
    data: {
        elems: [],
        newElem: {
            name: "",
            description: "",
            todo: true
        }
    },
    computed: {
        appName: function(){
            return "Semplice applicazione TODO";
        },
        elemsTodo: function(){
            return this.elems.length;
        }
    }
});
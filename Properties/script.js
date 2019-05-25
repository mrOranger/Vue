const app_utenti = Vue.component("app", {

    template: `
        <div class = "container col s6 m10 l12">
            <app-listUtenti></app-listUtenti>
        </div>
    `,
    data: function(){
        return new Object();
    }
});

const app_listUtenti = Vue.component('app-listUtenti', {

    template: `
        <div>
            <h2>Utente registrati</h2>
            <app-utente v-for = "utente in utenti" :key = "utente.ID" v-bind:item = "utente"></app-utente>
        </div> 
    `,
    data: function(){
        return {
            utenti: [
                {
                    ID: 1,
                    name: 'Marco',
                    surname: 'Rossi',
                    age: 22
                },
                {
                    ID: 2,
                    name: 'Andrea',
                    surname: 'Rossi',
                    age: 23
                },
                {
                    ID: 3,
                    name: 'Francesco',
                    surname: 'Rossi',
                    age: 24
                }
            ]            
        }
    }
});


const app_utente = Vue.component('app-utente', {

    props: [ 'item' ],
    template: `
        <div class = "row">
            <h3>Scehda di: {{getNameMethods()}} {{getSurnameMethods()}} {{getAgeMethods()}}</h3>
            <div class = "input-field col s12 m12 l12">
                <input type = "text" id = "name" v-model:value = "name" />
                <label for = "name">Nome: </label>
            </div>
            <div class = "input-field col s12 m12 l12">
                <input type = "text" id = "surname" v-model:value = "surname" />
                <label for = "surname">Cognome: </label>
            </div>
            <div class = "input-field col s12 m12 l12">
                <input type = "text" id = "age" v-model:value = "age" />
                <label for = "age">Età: </label>
            </div>
        </div>
    `,
    computed: {
        name: {
            get: function(){
                return this.item.name;
            },
            set: function(val){
                this.item.name = val;
            }
        },
        surname: {
            get: function(){
                return this.item.surname;
            },
            set: function(val){
                this.item.surname = val;
            }
        },
        age: {
            get: function(){
                return this.item.age;
            },
            set: function(val){
                this.item.age = val;
            }
        }
    },
    methods: {
        getNameMethods: function(){
            return this.item.name;
        },
        getSurnameMethods: function(){
            return this.item.surname;
        },
        getAgeMethods: function(){
            return this.item.age;
        }
    },
    watch: {
        name: function(val){
            if(this.name === ''){
                toastr.warning('Il campo nome è vuoto!');
            }else{
                toastr.info("Cambiato nome: " + val);
            }
        },
        surname: function(val){
            if(this.surname === ''){
                toastr.warning('Il campo cognome è vuoto!');
            }else{
                toastr.info("Cambiato cognome: " + val);
            }
        },
        age: function(val){
            if(this.age === ''){
                toastr.warning('Il campo età è vuoto!');
            }else{
                toastr.info("Cambiato età: " + val);
            }
        }
    }
});

const app = new Vue({
    el: '#app'
});
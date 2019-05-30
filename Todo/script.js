const app = new Vue({
    el: "#app",
    methods: {
        inserisciElemento: function(){
            if(this.newElem.name === "" || this.newElem.description === ""){
                toastr.error("Prego, compila i campi prima");
            }else{
                this.elems.push({
                    name: this.newElem.name,
                    description: this.newElem.description
                });
                toastr.success("Elemento inserito con successo!");
            }
            this.newElem.name = "";
            this.newElem.description = "";
        }
    },
    data: {
        elems: [],
        newElem: {
            name: "",
            description: ""
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
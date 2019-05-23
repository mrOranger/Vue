const Componente = Vue.component('Componente', {
    template: ` 
    <div class = "container" v-if = "inserisci">
        <div class = "row">
            <label>Inserisci un elemento: </label>
        </div>
        <div class = "row">
            <input v-on:click = "cancellaElemento()" type = "button" class = "btn waves-effect waves-light" value = "Inserisci un elemento ..." /> 
        </div>
    </div>
    <div class = "container" v-else-if = "cancella">
        <div class = "row">
            <label>Cancella un elemento: </label>
        </div>
        <div class = "row">
            <input v-on:click = "inserisciElemento()" type = "button" class = "btn waves-effect waves-light" value = "Cancella un elemento ... " />
        </div>
    </div>
    `,
    data: function () {
        return {
            inserisci: true,
            cancella: true,
            cancellaElemento: function(){
                this.cancella = true;
                this.inserisci = false;
            },
            inserisciElemento: function(){
                this.cancella = false;
                this.inserisci = true;
            }
        };
    }
});

const saluto = Vue.component('Saluto', {
    template: `
    <div class = "container">
        <p><h1>Ciclo for semplice</h1></p>
        <div class = "container"> 
            <div class = "row" v-for = "utente in utenti">
                <p>Nome Utente: {{utente.nome}}</p>
                <p>Cognome Utente: {{utente.cognome}}</p>
                <p>Età Utente: {{utente.eta}}</p>
            </div>
        </div> 
        <p><h1>For con indice</h1></p>
        <div class = "container"> 
            <div class = "row" v-for = "(utente, index) in utenti">
                <p><h3>Utente numero: {{index}}</h3></p>
                <p>Nome Utente: {{utente.nome}}</p>
                <p>Cognome Utente: {{utente.cognome}}</p>
                <p>Età Utente: {{utente.eta}}</p>
            </div>
        </div> 
    </div>
    `,
    data: function(){
        return {
            utenti: [
                {
                    nome: "Marco",
                    cognome: "Rossi",
                    eta: 23
                },
                {
                    nome: "Marcello",
                    cognome: "Rossi",
                    eta: 32
                },
                {
                    nome: "Andrea",
                    cognome: "Rossi",
                    eta: 43
                }
            ]
        };
    }
});

const app = new Vue({
    el: '#app'
});

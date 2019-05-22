const User = Vue.component('User', {
    template: `
    <div class="container col s12 m12 l12">
        <h1>Credenziali di: {{user.name}} {{user.surname}}</h1>
        <h2>Name: {{user.name}}</h2>
        <h2>Surname: {{user.surname}}</h2>
        <h2>Age: {{user.age}}</h2>
        <h2>Gender: {{user.gender}}</h2>
    </div>
    `,
    data: function(){
        return {
            user: {
                name: "Mario",
                surname: "Rossi",
                age: "52",
                gender: "Male"
            }
        }
    }
});

const app = new Vue({
    el: '#app'
});
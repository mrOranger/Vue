const App = Vue.component('App', {

    template: `
        <div class = "container">
            <ProductsList></ProductsList>
        </div>  
    `,
    data: function(){
        return new Object();
    }

});

const ProductList = Vue.component('ProductsList', {

    template: `
        <div class = "row">
            <h2>Lista dei prodotti disponibili in magazzino</h2>
            <Product v-for = "product in products" :key = "product.name" v-bind:item = "product"></Product>
        </div> 
    `,
    data: function(){
        return {
            products: [
                {
                    name: 'Product 1',
                    price: '23$',
                    description: 'Product 1 description ...',
                    img: '1'
                }, 
                {
                    name: 'Product 2',
                    price: '42$',
                    description: 'Product 2 description ...',
                    img: '2'
                },
                {
                    name: 'Product 3',
                    price: '93$',
                    description: 'Product 3 description ...',
                    img: '3'
                },
                {
                    name: 'Product 4',
                    price: '231$',
                    description: 'Product 4 description ...',
                    img: '4'
                }
            ]
        };
    }
});


const Product = Vue.component('Product', {
    
    props: [ 'item' ],
    template: `
        <div class = "card col m4 s4 l4">
            <div class = "card-image">
                <img v-bind:src = "'https://picsum.photos/240/240?image=' + item.img" />
                <span class = "card-title">{{item.name}}</span>
            </div>
            <div class = "card-content">
                <p>{{item.description}}</p>
                <h4>{{item.price}}</h4>
            </div>
        </div>
    `,
    data: function(){
        return new Object();
    }

});

const app = new Vue({
    el: "#app"
});

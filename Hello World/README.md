# HELLO WORLD!
Il classico punto di partenza quando si impara qualche nuovo linguaggio o framework è stampara a video la scritta "Hello World!".

Tralasciando il file HTML e CSS, con Vue.js è sufficiente instanziare un nuovo oggetto _Vue_ e passare come parametro al costruttore un oggetto con le seguenti chiavi:

1. _'el'_ rappresenta la parte HTML nella quale Vue verrà caricato.
2. _'data'_ rappresenta le coppie chiavi-valore della variabili.

```Javascript
    const app = new Vue({
        el: '#mioDiv',
        data: {
            messaggio: "Hello World!"
        }
    });
```
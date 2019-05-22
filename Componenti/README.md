# COMPONENTI
Una delle caratteritiche di Vue riguarda la **separazione delle componenti** ... okay, ma cosa è una componente?

_Una componente è un oggetto, un qualcosa che può essere usato in diversi ambiti e che viene definita una volta sola_.

Rimanendo fedeli a questa definizione, se fossimo interessati ad usare più di una volta un form avente gli stessi campi di input all'intero di un file HTML. Sarebbe necessario replicare il codice HTML del form più di una volta all'interno della pagina.

Con Vue è possibile definire una volta sola il codice e definire per questo un tag HTML particolare da riusare più di una volta.

## ESEMPIO

```javascript
    /* Classico elemento Vue per legare l'oggetto con id app a Vue */
    const app = new Vue({
        el: '#app'
    });

    /* Definizione della componente */
    const component = new Vue.component('Component', {
        /* Sezione contenente il codice HTML della componente */
        template: 
            `
                <form method = "POST">
                    <input type = "text" name = "nome" />
                    <button type = "submit" value = "{{ textButton }}"></button>
                </form>
            `,
        /* Sezione contenente ulteriori dati usati nella componente */
        data: function(){
            return {
                textButton: "Premimi"
            }
        }
    });
```
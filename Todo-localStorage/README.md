# TODO CON LOCAL STORAGE

In questa versione aggiornata dell'applicazione TODO, sono state aggiunte le seguenti funzionalità:

1. Capacità di "marcare" un elemento come _già fatto_.
2. Eliminazione di un elemento dalla lista delle cose da fare.

Inoltre, il salvataggio degli elementi non avviene più in una variabile dell'oggetto Vue, ma viene eseguito direttamente nel Database locale del Browser chiamato **web storage**.

## WEB STORAGE

Inizialmente se si volevano salvare informazioni relative ad un utente che sta utilizzando un'applicazione web si dovevano usare i **Cookies**. Tuttavia questi presentavano delle limitazioni quali:

1. Non erano un mezzo completamente sicuro.
2. Avevano un limite di dati uguale a 5mb.

Con HTML5 ed il Web Storage questi limiti sono superati. Fondamentalmente questo sistema utilizza un sistema chiave-valore simile a quello di una tabella Hash.

## CICLO DI VITA DI UN OGGETTO VUE

Ogni oggetto Vue segue un ciclo di vita a partire dall'istanziazione, questo provvede, ad esempio, che siano che siano prima creati gli elementi all'interno dell'attributo **methods** e poi che sia caricato il relativo template.

Il tag **created** permette l'esecuzione di codice nell'istante immediatamente successivo alla creazione dell'oggetto Vue. In questa maniera è possibile eseguire una porzione di codice prima che venga caricato tutto il resto.


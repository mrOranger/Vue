# PROPRIETA' COMPONENTI VUE

Per adesso in un componente abbiamo usato solamente le proprietà: 
1. **Template** che definisce il codice HTML della componente.
2. **Data** che definisce le informazioni usate dalla componente.
3. **Props**, un'array che definisce i valori passati alla componente tramite attributi HTML.

Altre due proprietà importanti da utilizzare in una componente Vue sono:

1. **Computed**: definisce dei metodi che eseguono il ciclo di rendering solamente quando gli elementi in essi contenuti sono stati modificati. Come suggerisce il nome stesso, calcola solamente una volta i valori da restiuire a meno che questi non vengano modificati. E'quindi utile definire in questa proprietà metodi che lavorano su informazioni statiche della componente.
2. **Methods**: definisce tutti i metodi che vengono usati all'interno della componente, diversamente da computed, calcola ogni volta i valori da restituire, eseguendo quindi il ciclo di rendering ogni volta che la funzione viene invocata.
3. **watch**: come suggerisce il nome stesso, definisce le funzioni che mettono _di guardia_ delle particolare variabili all'interno della componente. Può essere quindi utile definire all'interno di questa proprietà, delle funzioni che avvertono sul cambiamento dello stato della componente.


## NOTA
Da questo momento, per definire una componente verrà usata una sintassi del tipo: _nomeComponenteMadre_-_componente_ per evitare conflitti nella definizione di componenti.

Per la realizzazione questi file è stata utilizzata la libreria Toastr.

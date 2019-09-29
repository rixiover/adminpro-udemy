import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 

    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador terminó!')
    );

  }

  ngOnInit() {
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
    console.log('La pagina se cerrara');

  }

  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;
  
      const intervalo = setInterval(() => {
        contador +=1;

        let salida = {
          valor: contador
        }

        observer.next(salida);

        if(contador === 3){
          clearInterval(intervalo);
          observer.complete();
        }
       
       }, 1000)
  
      }).pipe(
        map(resp => resp.valor),
        filter( ( valor, index ) => {
          if((valor % 2) === 1){
            return true;
          }
        } )
      );

  }

}

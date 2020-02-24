import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxjs.component',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit, OnDestroy {
 
  subscripcion: Subscription;

  constructor() { 
    this.subscripcion = this.regresaObservable().pipe(retry(2))
    .subscribe(numero => console.log('subs' + numero),
                  error => console.error('Error en el obs', error),
                  () => console.log('El observador termino!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  console.log('dejo la pagina');
   this.subscripcion.unsubscribe();
  }


  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      console.log('creo nuevo observador');
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador
        }
        observer.next(salida);

        if (contador === 30) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 2) {
        //   //clearInterval(intervalo);
        //   observer.error('auxilio');
        // }

      }, 1000)
    }).pipe(
      map(resp => {
        return resp.valor
      }), filter((valor, index) => {
        if ((valor % 2)===1){
          return true;
        } else {
          return false;
        }
      })
    );
  }

}

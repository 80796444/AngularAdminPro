import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rxjs.component',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit {

  constructor() { 

    let obs = new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);

        if (contador === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (contador ===2) {
          observer.error('auxilio');
        }

      }, 1000)
    });

    obs.subscribe(numero => console.log('subs' + numero),
                  error => console.error('Error en el obs', error),
                  () => console.log('El observador termino!')
    );
  }

  ngOnInit() {
  }

}

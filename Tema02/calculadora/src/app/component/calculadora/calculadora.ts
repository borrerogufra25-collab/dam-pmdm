import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  pantalla = '0';
  operando1 = 0;
  operando2 = 0;

  escribir1(){
    if(this.pantalla == '0'){
      this.pantalla = '1';
    }else{
      this.pantalla = this.pantalla + '1';
    }
  }

    sumar(){
      //Guardar el valor de la pantalla en una variable operando1
      this.operando1 =Number(this.pantalla);
      //Concatenar el simbiolo + operador
      this.pantalla += '+';
    }

    resultado(){
      this.operando1 = Number (this.pantalla.split("+")[0]);
    }
      
    
  
}

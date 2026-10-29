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
  resultados = 0;

  escribir1(){
    if(this.pantalla == '0'){
      this.pantalla = '1';
    }else{
      this.pantalla = this.pantalla + '1';
    }
  }

  escribir2(){
    if(this.pantalla == '0'){
      this.pantalla = '2';
    }else{
      this.pantalla = this.pantalla + '2'
    }
  }

  escribir3(){
    if(this.pantalla == '0'){
      this.pantalla = '3';
    }else{
      this.pantalla = this.pantalla + '3'
    }
  }

  escribir4(){
    if(this.pantalla == '0'){
      this.pantalla = '4';
    }else{
      this.pantalla = this.pantalla + '4'
    }
  }

  escribir5(){
    if(this.pantalla == '0'){
      this.pantalla = '5';
    }else{
      this.pantalla = this.pantalla + '5'
    }
  }

  escribir6(){
    if(this.pantalla == '0'){
      this.pantalla = '6';
    }else{
      this.pantalla = this.pantalla + '6'
    }
  }

  escribir7(){
    if(this.pantalla == '0'){
      this.pantalla = '7';
    }else{
      this.pantalla = this.pantalla + '7'
    }
  }

  escribir8(){
    if(this.pantalla == '0'){
      this.pantalla = '8';
    }else{
      this.pantalla = this.pantalla + '8'
    }
  }

  escribir9(){
    if(this.pantalla == '0'){
      this.pantalla = '9';
    }else{
      this.pantalla = this.pantalla + '9'
    }
  }

  escribir0(){
    if(this.pantalla == '0'){
      this.pantalla = '0';
    }else{
      this.pantalla = this.pantalla + '0'
    }
  }

    sumar(){
     //Concatenar el simbolo + el operando que hay en pantalla
    this.pantalla += '+';
    }

    restar(){
    this.pantalla += '-';
    }

    resultado(){

      if(this.pantalla.includes('+')){
      this.operando1 = Number (this.pantalla.split("+")[0]);
      this.operando2 = Number(this.pantalla.split("+")[1]);

      this.resultados = this.operando1 + this.operando2;
      }

      if(this.pantalla.includes('-')){
        this.operando1 = Number(this.pantalla.split('-')[0]);
        this.operando2 = Number(this.pantalla.split('-')[1]);

        this.resultados = this.operando1 - this.operando2;
      }

      this.pantalla = this.resultados.toString();
    }

    limpiar(){
      this.pantalla = '0';
      this.operando1 = 0;
      this.operando2 = 0;
      this.resultados = 0;
    }
      
    
  
}

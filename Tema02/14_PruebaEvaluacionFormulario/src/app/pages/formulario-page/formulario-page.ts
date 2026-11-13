import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-page',
  styleUrl: './formulario-page.css',
  templateUrl: './formulario-page.html',
})
export class FormularioPage {
  formularioVete = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/),
    ]),
    apellidos: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/),
    ]),
    telefonoCont: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nombreMascota: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/),
    ]),
    especie: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    raza: new FormControl('', Validators.maxLength(40)),
    edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
    peso: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(90)]),
    numMicrochip: new FormControl('', [Validators.required, Validators.pattern(/^\d{15}$/)]),
    contrasenia: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.maxLength(24),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/),
    ]),
    motivo: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.maxLength(300),
    ]),
    politica: new FormControl('', Validators.requiredTrue),
    recordatorio: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.formularioVete.value);
  }

  esInvalido(campo: string) {
    return (
      this.formularioVete.get(campo)?.invalid &&
      (this.formularioVete.get(campo)?.dirty || this.formularioVete.get(campo)?.touched)
    );
  }
}

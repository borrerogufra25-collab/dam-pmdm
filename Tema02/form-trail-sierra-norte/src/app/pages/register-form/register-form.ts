import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  formulario = new FormGroup({
    nombreCompleto: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),

    telefono: new FormControl('', [
      (Validators.required, Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)),
    ]),

    contrasenia: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/),
    ]),

    datosCarrera: new FormControl('10k', Validators.required),

    categoria: new FormControl('', Validators.required),

    edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(85)]),

    codFederado: new FormControl('', [Validators.required, Validators.pattern(/^FED-\d{4}$/)]),

    alergias: new FormControl(''),

    condiciones: new FormControl('', Validators.requiredTrue),

    trackGPS: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.formulario.value);
  }

  esInvalido(campo: string) {
    return (
      this.formulario.get(campo)?.invalid &&
      (this.formulario.get(campo)?.dirty || this.formulario.get(campo)?.touched)
    );
  }
}

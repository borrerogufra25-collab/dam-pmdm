import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-page',
  styleUrl: './formulario-page.css',
  templateUrl: './formulario-page.html',
})
export class FormularioPage {
  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/),
    ]),
    apellidos: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/),
    ]),
    dni: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{8}[A-Za-z]$|^[XYZxyz][0-9]{7}[A-Za-z]$'),
    ]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^(\+34)?[67]\d{8}$/)]),
    nombreUsuario: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]*$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/),
    ]),
    cursoInteres: new FormControl('', Validators.required),
    horasDisponibles: new FormControl('', [
      Validators.required,
      Validators.min(2),
      Validators.max(40),
    ]),
    codigoPostal: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/),
    ]),
  });

  onSubmit() {
    console.warn(this.formularioRegistro.value);
  }

  esInvalido(campo: string) {
    return (
      this.formularioRegistro.get(campo)?.invalid &&
      (this.formularioRegistro.get(campo)?.dirty || this.formularioRegistro.get(campo)?.touched)
    );
  }
}

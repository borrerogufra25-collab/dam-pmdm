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
  });
}

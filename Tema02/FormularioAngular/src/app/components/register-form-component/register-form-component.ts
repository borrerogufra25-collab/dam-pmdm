import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-register-form-component',
  styleUrl: './register-form-component.css',
  templateUrl: './register-form-component.html',
})
export class RegisterFormComponent {
  nombre = '';
  apellidos = '';
  dni = '';
  email = '';
  telefono = '';
  // Sexo mirar
  // Seleccionar cómo conoció la página mirar
  contraseña = '';
  confirmarContraseña = '';
  // terminos mirar
}

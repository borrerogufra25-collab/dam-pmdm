import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form-component',
  styleUrl: './register-form-component.css',
  templateUrl: './register-form-component.html',
})
export class RegisterFormComponent {
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';

  sexo = '';

  comoConocio = '';

  contrasenia = '';
  confirmarContrasenia = '';

  aceptaTerminos = false;

  registrar(): void {
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('NIF:', this.nif);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Sexo:', this.sexo);
    console.log('Cómo conoció la página:', this.comoConocio);
    console.log('Contraseña:', this.contrasenia);
    console.log('Confirmar contraseña:', this.confirmarContrasenia);
    console.log('Acepta términos:', this.aceptaTerminos);
  }
}

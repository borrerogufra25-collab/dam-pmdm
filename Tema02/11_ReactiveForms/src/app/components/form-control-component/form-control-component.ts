import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-control-component',
  styleUrl: './form-control-component.css',
  templateUrl: './form-control-component.html',
})
export class FormControlComponent {
  formularioBlog = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    categoria: new FormControl(''),
    etiqueta: new FormControl(''),
    emailAutor: new FormControl(''),
    publicacion: new FormControl('ahora'),
    fechaPublicacion: new FormControl({ value: '', disabled: true }),
  });

  onSubmit(): void {
    if (this.formularioBlog.valid) {
      console.log(this.formularioBlog.value);
    }
  }
}

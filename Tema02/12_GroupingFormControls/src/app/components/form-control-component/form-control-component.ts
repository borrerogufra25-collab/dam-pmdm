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
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    tags: new FormControl(''),
    email: new FormControl(''),
    publishNow: new FormControl(true),
    publishDate: new FormControl({ value: '', disabled: true }),
  });

  constructor() {
    this.formularioBlog.controls.publishNow.valueChanges.subscribe((ahora) => {
      const fecha = this.formularioBlog.controls.publishDate;
      if (ahora) {
        fecha.reset('');
        fecha.disable();
      } else {
        fecha.enable();
      }
    });
  }

  onSubmit() {
    console.warn(this.formularioBlog.value);
  }
}

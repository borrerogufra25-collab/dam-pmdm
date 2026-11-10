import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-control-component',
  styleUrl: './form-control-component.css',
  templateUrl: './form-control-component.html',
})
export class FormControlComponent {
  formularioBlog = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    category: new FormControl('', Validators.required),
    tags: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
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

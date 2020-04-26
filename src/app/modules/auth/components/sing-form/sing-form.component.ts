import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sing-form',
  templateUrl: './sing-form.component.html',
  styleUrls: ['./sing-form.component.scss']
})
export class SingFormComponent implements OnInit {
  @Output() sendSignForm = new EventEmitter<FormGroup>();
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
  }

  public sign() {
    if (this.form.valid) {
      this.sendSignForm.emit(this.form)
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: FormGroup = new FormGroup({
    yourname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
  });
  submitted = true;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      yourname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    if (this.submitted) {
      alert('Send message successfull');
      window.location.href = '#';
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

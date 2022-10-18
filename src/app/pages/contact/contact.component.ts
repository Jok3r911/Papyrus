import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit() {
    this.submitted = true;

   
    if (this.submitted) {
      alert('Logged in successfully');
      window.location.href = '#';
    }
}

}

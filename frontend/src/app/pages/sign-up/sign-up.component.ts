import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor() { }

  name: string;
  surname: string;
  email: string;
  password: string;

  submitForm() {
    // Perform sign-up logic here, e.g., calling an authentication service
    console.log('Form submitted!');
    console.log('Name:', this.name);
    console.log('Surname:', this.surname);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

}

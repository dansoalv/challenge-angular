import { Component, OnInit } from '@angular/core';
import validator from 'validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isUser = false;
  isEmailValid;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(isChecked) {
    this.isUser = isChecked;
  }

  onChangeEmail(email) {
    this.isEmailValid = validator.isEmail(email);
  }

}

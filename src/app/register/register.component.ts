import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  //Event
  onclick()
  {
    alert("Request Sent")
  }
//form elements
//courseTypes - array
courseTypes = ['Valorant', 'Starcraft II', 'Rocket League'];
myForm: FormGroup | any;
username: FormControl | any;
password: FormControl | any;
courseType: FormControl | any;
ngOnInit() {
  this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  this.password = new FormControl('', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(7)]);
  this.courseType = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
  this.myForm = new FormGroup({
    'username': this.username, //John
    'password': this.password, //John123
    'courseType': this.courseType //Java
  });
}
}

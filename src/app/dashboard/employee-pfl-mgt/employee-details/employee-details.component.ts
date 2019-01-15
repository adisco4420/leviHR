import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }
  employeBasicForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', Validators.required),
    middlename: new FormControl(''),
    gender: new FormControl('', Validators.required),
    dob: new FormControl(''),
    stateOfOrigin: new FormControl(''),
    localGovt: new FormControl(''),
    employmentDate: new FormControl(''),
    employementStatus: new FormControl(''),


  });

  ngOnInit() {
  }
  basicInfo() {
    console.log(this.employeBasicForm.value);
  }

}

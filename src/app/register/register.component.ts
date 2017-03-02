import { Component, OnInit } from '@angular/core';
import { NewColonist, Occupation } from '../model';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Occupation[];
  registerForm: FormGroup;

  constructor() {
    //API calling code to get Occupation
    this.marsJobs = [
      { name: 'Professional Pooper', id: '1', description: 'Fertilizer Contributor' },
      { name: 'Rock Collector', id: '2', description: 'Finds the most badass rocks of all time' },
      { name: 'Pokemon Master', id: '3', description: 'Pokemon.... aka martians' }
    ];


    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, this.acceptAge(0, 50)]),
      job_id: new FormControl('', [Validators.required, this.acceptJob() ])
    })
   }

   acceptAge(min: number, max: number) {
     return (control: AbstractControl): {[key: string]: any} => {
      if(control.value < min || control.value > max || control.value == '') {
        return { 'Incorrect age': {age: control.value}};
      } 
     }
   }

   acceptJob() {
     return (control: AbstractControl): {[key: string]: any} => {
      if(control.value == 'none') {
        return {job_id: control.value};
      } 
     }
   }

    logColonist() {
     console.log(this.registerForm);

   }

  ngOnInit() {

  }

}

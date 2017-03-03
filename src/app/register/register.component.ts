import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../model';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { JOBS_URL, COLONISTS_URL } from '../model/API';
import { ColonistAPIService } from '../apiService/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService]
})
export class RegisterComponent implements OnInit {

  marsJobs: Job[];
  registerForm: FormGroup;
  clickedSubmit: boolean;

  constructor(private colonistApiService: ColonistAPIService) {
    this.clickedSubmit = false;
    //API calling code to get Job
    // this.getMarsJobs();
    // this.clickedButton = false;
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

  getMarsJobs() {
    console.log('getting jobs...');
  }

  postNewColonist(event) {
    event.preventDefault();
    this.clickedSubmit = true;
    console.log('hi');
    if(!this.registerForm.invalid) {
      
    } else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;
      const newColonist = new NewColonist(name, age, job_id);
      this.colonistApiService.saveColonist(newColonist)
                              .subscribe((result) => {
                                console.log('Colonist was saved:', result);
                              });
    }
  }
}

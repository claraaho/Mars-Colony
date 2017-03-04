import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../model';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { JOBS_URL, COLONISTS_URL } from '../model/API';
import { ColonistAPIService } from '../apiService/colonist';
import { JobsAPIService } from '../apiService/jobs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService]
})

export class RegisterComponent implements OnInit {

  marsJobs: Job[];
  registerForm: FormGroup;
  clickedSubmit: boolean;

  constructor(
    private colonistApiService: ColonistAPIService,
    private jobsAPIService: JobsAPIService,
    private router: Router
    ) {

    this.clickedSubmit = false;
    this.getMarsJobs();

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

  ngOnInit() {}

  getMarsJobs() {
    this.jobsAPIService.getMarsJobs()
                        .subscribe((result) => {
                          this.marsJobs = result;
                        });
  }

  postNewColonist(event) {
    event.preventDefault();
    this.clickedSubmit = true;
    if(this.registerForm.invalid) {
      
    } else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;
      const newColonist = new NewColonist(name, age, job_id);
      const colonistPostRequest = { colonist: newColonist }
      this.colonistApiService.saveColonist(colonistPostRequest)
                              .subscribe((result) => {
                                console.log('Colonist was saved:', result);
                                localStorage.setItem("colonistID", result.id.toString());
                                this.router.navigate(['encounters']);
                              });
    }
  }
}

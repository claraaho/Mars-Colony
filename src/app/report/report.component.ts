import { Component, OnInit } from '@angular/core';
import { Alien } from '../model';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  alienTypes: Alien[];
  registerForm: FormGroup;

  constructor() { 

    this.alienTypes = [
      { type: 'Domo-kun', id: '1', description: 'rawrrrrrr XD' },
      { type: 'Pedobear', id: '2', description: 'I got candy' },
      { type: 'Protoss', id: '3', description: 'YOU MUST CONSTRUCT ADDITIONAL PYLONS' },
      { type: 'Zergies', id: '3', description: 'zerg rush!' }
    ];

    this.registerForm = new FormGroup({
      alien_id: new FormControl('', [Validators.required, this.acceptType()]),
      description: new FormControl('', [Validators.required]),
    })
  }

  acceptType() {
     return (control: AbstractControl): {[key: string]: any} => {
      if(control.value == 'none') {
        return {job_id: control.value};
      } 
     }
   }

  logData() {
     console.log(this.registerForm);

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Alien, NewEncounter } from '../model';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AliensAPIService } from '../apiService/aliens';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService, EncountersAPIService]
})

export class ReportComponent implements OnInit {

  alienTypes: Alien[];
  registerForm: FormGroup;
  clickedSubmit: boolean;

  constructor(
    private aliensAPIService: AliensAPIService,
    private encountersAPIService: EncountersAPIService
    ) { 

    this.clickedSubmit = false;
    this.getAliens();

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

  ngOnInit() {}

  getAliens() {
    this.aliensAPIService.getAliens()
                        .subscribe((result) => {
                          this.alienTypes = result;
                        });
  }

  submitReport(event) {
    event.preventDefault();
    this.clickedSubmit = true;
    if(this.registerForm.invalid) {
      
    } else {
      const atype = this.registerForm.get('alien_id').value;
      const action = this.registerForm.get('description').value;
      const date = new Date().toISOString().substring(0,10);
      const colonist_id = localStorage.getItem("colonistID");
      console.log(colonist_id);
      const newEncounter = new NewEncounter(atype, date, action, colonist_id);
      const encountersPostRequest = { encounter: newEncounter }
      this.encountersAPIService.saveNewEncounter(encountersPostRequest)
                              .subscribe((result) => {
                                console.log('Encounter was saved:', result);
                                localStorage.setItem("alienName", result.atype.toString());
                              });
    }
  }

}

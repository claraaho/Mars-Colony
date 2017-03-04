import { Component, OnInit } from '@angular/core';
import { Encounter } from '../model';
import { ENCOUNTERS_URL } from '../model/API';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersAPIService]
})
export class EncountersComponent implements OnInit {

  encountersList: Encounter;

  constructor(private encountersAPIService: EncountersAPIService) { 
    this.getEncounters();
  }

  ngOnInit() {}

  getEncounters() {
    this.encountersAPIService.getEncounters()
                          .subscribe((result) => {
                          this.encountersList = result;
                        });
  }
}

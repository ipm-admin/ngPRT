import { Component, OnInit } from '@angular/core';
import { ScenariosService } from '../../shared/scenarios.service';

@Component({
  selector: 'scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss']
})
export class ScenariosComponent implements OnInit {

  scenarios = [];
  newScenario = {
    name: null,
    commodity: null,
    desc: null,
    bloomStart: null,
    bloomEnd: null,
    harvestDate: null,
    id: null
  }

  constructor(private scenariosService: ScenariosService) { }

  ngOnInit() {
    console.log(this.scenarios)
    
    this.getScenarios();
    console.log(this.scenarios)
  }

  getScenarios() {
    this.scenarios = this.scenariosService.getScenarios();
  }

  createScenario() {
    this.newScenario.id = this.scenarios.length;
    this.scenarios.push(this.newScenario);
    this.newScenario = {
      name: null,
      commodity: null,
      desc: null,
      bloomStart: null,
      bloomEnd: null,
      harvestDate: null,
      id: null
    }
  }

  deleteScenario(scenario){
    // need to pass this to a confirmation box
    this.scenarios.splice(this.scenarios.indexOf(scenario), 1);
  }

}

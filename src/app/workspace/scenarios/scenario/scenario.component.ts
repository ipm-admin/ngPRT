import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {
@Input() scenario: {
  name: string,
  commodity: string,
  desc: string,
  bloomStart: string,
  bloomEnd: string,
  harvestDate: string
}
@Output() deleteSelectedScenario = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteScenario(scenario){
    this.deleteSelectedScenario.emit(scenario);
  }

}

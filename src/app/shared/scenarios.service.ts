import { Injectable } from '@angular/core';

@Injectable()
export class ScenariosService {

  scenarios = [
    {
      name: 'Scenario 1',
      commodity: 'almonds',
      desc: 'This is an almond farm?',
      bloomStart: 'May 8 2073',
      bloomEnd: 'May 83 1492',
      harvestDate: 'tomorrow'
    }
  ]

  constructor() { }

  getScenarios() {
    return this.scenarios;
  }

}

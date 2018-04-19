import { Injectable } from '@angular/core';

@Injectable()
export class ManagementUnitsService {
  
  managementUnits = [
    {
      name: 'mu-1',
      type: 'type-1',
      area: 22,
      areaUnits: 'acre',
      desc: 'this is a description?',
      id: 0,
      siteID: 0
    }
  ];

  constructor() { }
  
  getManagementUnits() {
    return this.managementUnits;
  }
}

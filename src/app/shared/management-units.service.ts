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
      id: 1,
      siteID: 0
    },
    {
      name: 'mu-2',
      type: 'almonds',
      area: 6,
      areaUnits: 'acre',
      desc: 'this is a description?',
      id: 1,
      siteID: 0
    },
    {
      name: 'mu-2',
      type: 'almondssssss',
      area: 6,
      areaUnits: 'acre',
      desc: 'this is a description?',
      id: 1,
      siteID: 0
    }
  ];

  constructor() { }
  
  getManagementUnits() {
    return this.managementUnits;
  }
}

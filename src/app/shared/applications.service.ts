import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationsService {
  applications = [
    {
      product: '2016bifenthrin',
      regNo: '5481-609',
      prodAppRate: '1 floz/ac',
      aiAppRate:'Bifenthrin 1.573E-002 lb/acre',
      usePattern: 'Use Pattern/dust/',
      date: '11/02/2017',
      reEntryInterval: '23',
      workTime: '3',
      glovesWorn: 'no',
      bloomStatus: '',
      leafStatus: ''
    },
    {
      product: 'some other product',
      regNo: '1234-567',
      prodAppRate: '12 floz/ac',
      aiAppRate: 'Bifenthrin 1.573E-002 lb/acre',
      usePattern: 'Use Pattern/dust/',
      date: '11/02/2017',
      reEntryInterval: '2',
      workTime: '32',
      glovesWorn: 'yes',
      bloomStatus: '',
      leafStatus: ''
    },

  ]

  constructor() { }

  getApplications(){
    return this.applications;
  }
}

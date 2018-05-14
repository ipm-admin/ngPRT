import { Injectable } from '@angular/core';

@Injectable()
export class SitesService {

  sites = [
    {
      name: 'Site 1',
      desc: 'This site is cool I guess',
      id: 0
    },
    {
      name: 'Site 2',
      desc: 'What even goes here, for real?',
      id: 1
    },
    {
      name: 'Site 3',
      desc: '',
      id: 2
    }
  ];

  constructor() { }

  getSites() {
    return this.sites;
  }
}

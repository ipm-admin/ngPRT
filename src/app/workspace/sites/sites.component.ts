import { Component, OnInit } from '@angular/core';
import { SiteComponent } from './site/site.component';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
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

  ngOnInit() {
  }
  

}

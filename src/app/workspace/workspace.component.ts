import { Component, OnInit } from '@angular/core';
import { SiteComponent } from './sites/site/site.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
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
  units = [
    {
      name: 'asdf',
      type: 'almond',
      area: '22',
      areaUnits: 'ha',
      desc: 'This is the description',
      id: ''
    }
  ]

  // selectedSite;
  // showConfirmDeleteModal = false;
  // showEditModal = false;
  // siteNameEdit = '';
  // newSite = {
  //   name: '',
  //   desc: '',
  //   id: 0
  // }
  

  constructor() { }

  ngOnInit() {
  }
  
  

}

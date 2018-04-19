import { Component, OnInit } from '@angular/core';
import { SiteComponent } from './sites/site/site.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
 
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

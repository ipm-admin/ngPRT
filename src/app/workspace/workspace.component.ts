import { Component, OnInit } from '@angular/core';
import { SiteComponent } from './sites/site/site.component';
import { SitesComponent } from './sites/sites.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  step = 1;
  readyToAdvance = false;

  constructor() { }

  ngOnInit() {
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  } 

  nextStep() {
    if (this.step >= 1) {
      this.step++;
      // this.readyToAdvance = false;
    }
  }

  setReadyToAdvance() {
    this.readyToAdvance = true;
  }

  setStatus(){
    this.readyToAdvance = !this.readyToAdvance;
  }
}

import { Component, OnInit } from '@angular/core';
import { SiteComponent } from './sites/site/site.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  step = 1;
  readyToAdvance = true;

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
    }
  }

  setReadyToAdvance() {
    this.readyToAdvance = true;
  }


  
  

}

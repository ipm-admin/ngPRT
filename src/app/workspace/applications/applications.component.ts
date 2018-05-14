import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../../shared/applications.service';

@Component({
  selector: 'applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  applications = [];

  constructor(private applicationsService: ApplicationsService) { }

  ngOnInit() {
    this.getApplications()
  }

  getApplications(){
    this.applications = this.applicationsService.getApplications();
  }
  
}

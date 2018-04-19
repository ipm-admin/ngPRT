import { Component, OnInit } from '@angular/core';
import { SiteComponent } from './site/site.component';
import { SitesService } from '../../sites.service';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  sites = [];
  selectedSite;
  newSite = {
    name: '',
    desc: '',
    id: 0
  }
  
  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    this.getSites();
  }
  
  getSites() {
    this.sites = this.sitesService.getSites()
  }

  getSelectedSite(site) {
    this.selectedSite = site;
  }

  createSite() {
    this.newSite.id = this.sites.length;
    this.sites.push(this.newSite);
    this.newSite = {
      name: '',
      desc: '',
      id: 0
    }
  }

  deleteSite(site) {
    // need to pass this to a confirmation box
    this.sites.splice(this.sites.indexOf(site),1)
  }
}

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
  
  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    this.getSites();
  }
  
  getSites() {
    this.sites = this.sitesService.getSites()
  }

  getSelectedSite(site) {
    console.log(site);
    this.selectedSite = site;
  }
}

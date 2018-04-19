import { Component, OnInit, Output } from '@angular/core';
import { SiteComponent } from './site/site.component';
import { SitesService } from '../../sites.service';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  sites = [];
  selectedSite;
  tempSite = {
    name: '',
    desc: '',
    id: null
  };
  newSite = {
    name: '',
    desc: '',
    id: 0
  };
  
  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    this.getSites();
  }
  
  getSites() {
    this.sites = this.sitesService.getSites();
  }

  getSelectedSite(site) {
    this.selectedSite != site ? this.selectedSite = site : this.selectedSite = null;
  }

  createSite() {
    // will need to find a new way to create ids, obviously
    this.newSite.id = this.sites.length;
    this.sites.push(this.newSite);
    this.newSite = {
      name: '',
      desc: '',
      id: 0
    }
  }

  // editSite(site) {
  //   this.selectedSite = site;
  //   this.tempSite = {
  //     name: site.name,
  //     desc: site.desc,
  //     id: site.id
  //   };
  // }

  saveSite(site) {
    site = this.tempSite;
  }

  deleteSite(site) {
    // need to pass this to a confirmation box
    this.sites.splice(this.sites.indexOf(site),1);
  }
}

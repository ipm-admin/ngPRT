import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SiteComponent } from './site/site.component';
import { SitesService } from '../../shared/sites.service';

@Component({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  @Output() siteChange = new EventEmitter<string>();
  sites = [];
  selectedSite;
  tempSite = {
    name: null,
    desc: null,
    id: null
  };
  newSite = {
    name: null,
    desc: null,
    id: null
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
    console.log(site)
    this.siteChange.emit('true')
  }

  createSite() {
    // will need to find a new way to create ids, obviously
    this.newSite.id = this.sites.length;
    this.sites.push(this.newSite);
    this.newSite = {
      name: null,
      desc: null,
      id: null
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

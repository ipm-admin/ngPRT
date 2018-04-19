import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  @Input() site: {
    name: string,
    desc: string,
    id: number
  }
  @Output() selectedSite = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  selectSite(site) {
    this.selectedSite.emit(site)
  }

  editSite(site) {
    console.log(site);
  }

  deleteSite(site) {
    console.log(site);
  }

}

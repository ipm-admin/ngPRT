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
  @Output() deleteSelectedSite = new EventEmitter<string>();
  // @Output() openEditModal = new EventEmitter<string>();
 

  constructor() { }

  ngOnInit() {
  }

  selectSite(site) {
    this.selectedSite.emit(site);
  }

  // editSite(site) {
  //   this.openEditModal.emit(site);
  // }

  deleteSite(site) {
    alert("are you sure?");
    this.deleteSelectedSite.emit(site);
  }

}

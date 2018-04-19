import { Component, OnInit, Input } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  selectSite(site) {
    console.log(site);
  }

  editSite(site) {
    console.log(site);
  }

  deleteSite(site) {
    console.log(site);
  }

}

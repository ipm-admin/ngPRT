import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'management-unit',
  templateUrl: './management-unit.component.html',
  styleUrls: ['./management-unit.component.scss']
})
export class ManagementUnitComponent implements OnInit {
  @Input() managementUnit: {
    name: string,
    type: string,
    area: number,
    areaUnits: string,
    desc: string,
    id: number,
    siteID: number
  }
  constructor() { }

  ngOnInit() {
  }

}

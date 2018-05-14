import { Component, OnInit } from '@angular/core';
import { ManagementUnitsService } from '../../shared/management-units.service';


@Component({
  selector: 'management-units',
  templateUrl: './management-units.component.html',
  styleUrls: ['./management-units.component.scss']
})
export class ManagementUnitsComponent implements OnInit {
  managementUnits = [];
  newManagementUnit = {
    name: null,
    type: null,
    area: null,
    areaUnits: null,
    desc: null
  }

  constructor(private managementUnitsService: ManagementUnitsService) { }

  ngOnInit() {
    this.getManagementUnits();
  }

  getManagementUnits(){
    this.managementUnits = this.managementUnitsService.getManagementUnits();
  } 

  createManagementUnit() {
    this.managementUnits.push(this.newManagementUnit);
    this.newManagementUnit = {
      name: null,
      type: null,
      area: null,
      areaUnits: null,
      desc: null
    };
  }
}

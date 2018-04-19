import { Component, OnInit } from '@angular/core';
import { ManagementUnitsService } from '../../management-units.service';


@Component({
  selector: 'management-units',
  templateUrl: './management-units.component.html',
  styleUrls: ['./management-units.component.scss']
})
export class ManagementUnitsComponent implements OnInit {
  managementUnits = [];

  constructor(private managementUnitsService: ManagementUnitsService) { }

  ngOnInit() {
    this.getManagementUnits();
  }

  getManagementUnits(){
    this.managementUnits = this.managementUnitsService.getManagementUnits();
  }

}

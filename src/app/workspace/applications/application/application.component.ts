import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  @Input() application = {
    product: null,
    regNo: null,
    prodAppRate: null,
    aiAppRate: null,
    usePattern: null,
    date: null,
    reEntryInterval: null,
    workTime: null,
    glovesWorn: null,
    bloomStatus: null,
    leafStatus: null
  }

  constructor() { }

  ngOnInit() {
  }

}

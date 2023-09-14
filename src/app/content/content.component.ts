import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit {
  fuelElements = [
    {
      id: 0,
      title: 'SPBU Test',
      description: 'dladksakjasdskaldjas',
      hasVisit: 1,
    },
    {
      id: 1,
      title: 'SPBU Test2',
      description: 'dladksakjasdskaldjas',
      hasVisit: 1,
    },
    {
      id: 2,
      title: 'SPBU Test3',
      description: 'dladksakjasdskaldjas',
      hasVisit: 1,
    },
  ];

  fuelStationAdd(fuelData: {
    // fuelId: number;
    fuelTitle: string;
    fuelDescription: string;
    fuelHasVisit: number;
  }) {
    let addedID = this.fuelElements.length;
    this.fuelElements.push({
      id: addedID,
      title: fuelData.fuelTitle,
      description: fuelData.fuelDescription,
      hasVisit: fuelData.fuelHasVisit,
    });
  }

  fuelStationVisit(fuelData: { fuelId: number }) {
    this.fuelElements[fuelData.fuelId].hasVisit++;
  }

  constructor() {}

  ngOnInit(): void {}
}

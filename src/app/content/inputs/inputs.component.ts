import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
  @Output('fsCreated') fuelStationCreated = new EventEmitter<{
    fuelTitle: string;
    fuelDescription: string;
    fuelHasVisit: number;
  }>();

  fuelTitle = '';
  fuelDescription = '';
  fuelHasVisit = '';

  // onAddFuel() {
  //   this.fuelElements.push({
  //     id: this.fuelElements.length,
  //     title: this.fuelTitle,
  //     description: this.fuelDescription,
  //     hasVisit: +this.fuelHasVisit,
  //   });
  // }

  onAddFuel() {
    this.fuelStationCreated.emit({
      fuelTitle: this.fuelTitle,
      fuelDescription: this.fuelDescription,
      fuelHasVisit: +this.fuelHasVisit,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}

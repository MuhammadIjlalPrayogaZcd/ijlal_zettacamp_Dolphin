import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('fuelsElement')
  element!: {
    id: number;
    title: string;
    description: string;
    hasVisit: number;
  };

  @Output() fuelHasVisited = new EventEmitter<{ fuelId: number }>();

  onVisit(id: number) {
    this.fuelHasVisited.emit({
      fuelId: id,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}

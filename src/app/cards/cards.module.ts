import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListofcardsComponent } from './listofcards/listofcards.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListofcardsComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListofcardsComponent],
})
export class CardsModule {}

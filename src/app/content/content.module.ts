import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { ContentComponent } from './content.component';
import { InputsComponent } from './inputs/inputs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
    ContentComponent,
    InputsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CarouselComponent,
    CardComponent,
    ContentComponent,
    InputsComponent,
  ],
})
export class ContentModule {}

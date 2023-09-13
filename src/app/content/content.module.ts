import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfPostComponent } from './list-of-post/list-of-post.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [ListOfPostComponent, UserCardComponent],
  imports: [CommonModule],
  exports: [ListOfPostComponent, UserCardComponent],
})
export class ContentModule {}

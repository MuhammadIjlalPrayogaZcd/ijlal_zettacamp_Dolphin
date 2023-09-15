import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterViewInit,
    AfterViewChecked,
    DoCheck,
    AfterContentInit,
    AfterContentChecked
{
  @Input('taskElements')
  element!: {
    id: number;
    title: string;
    description: string;
    hasDone: boolean;
  };

  @Output() taskHasDoned = new EventEmitter<{ taskId: number }>();
  @Output() taskHasDeleted = new EventEmitter<{ taskId: number }>();

  onDone(id: number) {
    this.taskHasDoned.emit({
      taskId: id,
    });
  }

  onDelete(id: number) {
    this.taskHasDeleted.emit({
      taskId: id,
    });
  }

  constructor() {
    console.log('constructor called');
    // alert('Task Has Created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges called');
    console.log(changes);
    // simpleChanges ngecek prev = current.
  }

  ngOnInit(): void {
    console.log('init called');
  }

  ngAfterViewInit(): void {
    console.log('afterviewinitcalled');
  }

  ngAfterViewChecked(): void {
    // console.log('AfterViewCheckedcalled');
    // alert('Task Has Created');
  }

  ngAfterContentInit(): void {
    console.log('contentinit');
    // alert('Task Has Created');
  }

  ngAfterContentChecked(): void {
    // console.log('contentChecked');
  }

  ngDoCheck(): void {
    // console.log('docheck called');
  }

  ngOnDestroy(): void {
    console.log('ondestroy called');
    alert('Task Has Deleted');
  }
}

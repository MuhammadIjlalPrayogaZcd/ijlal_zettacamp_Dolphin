import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @Output() taskCreated = new EventEmitter<{
    taskTitle: string;
    taskDescription: string;
    taskHasDone: boolean;
  }>();

  @ViewChild('taskTitle', { static: true }) taskTitle!: ElementRef;
  // taskTitle = '';
  @ViewChild('taskDescription', { static: true }) taskDescription!: ElementRef;
  // taskDescription = '';
  taskHasDone = false;

  // onAddtask() {
  //   this.taskElements.push({
  //     id: this.taskElements.length,
  //     title: this.taskTitle,
  //     description: this.taskDescription,
  //     hasDone: +this.taskHasDone,
  //   });
  // }

  onAddTask(taskTitle: HTMLInputElement, taskDescription: HTMLInputElement) {
    this.taskCreated.emit({
      taskTitle: this.taskTitle.nativeElement.value,
      taskDescription: this.taskDescription.nativeElement.value,
      taskHasDone: this.taskHasDone,
    });
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.onAddTask();
    // {
    //   this.taskCreated.emit({
    //     taskTitle: this.taskTitle,
    //     taskDescription: this.taskDescription,
    //     taskHasDone: this.taskHasDone,
    //   });
    // }
  }
  ngAfterViewChecked(): void {
    // this.onAddTask();
    // {
    //   this.taskCreated.emit({
    //     taskTitle: this.taskTitle,
    //     taskDescription: this.taskDescription,
    //     taskHasDone: this.taskHasDone,
    //   });
    // }
    console.log('tes');
  }
}

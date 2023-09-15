import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit, AfterViewInit {
  taskElements = [
    {
      id: 0,
      title: 'Task Test',
      description: 'dladksakjasdskaldjas',
      hasDone: false,
    },
    {
      id: 1,
      title: 'Task Test2',
      description: 'dladksakjasdskaldjas',
      hasDone: false,
    },
    {
      id: 2,
      title: 'Task Test3',
      description: 'dladksakjasdskaldjas',
      hasDone: false,
    },
  ];

  taskAdd(taskData: {
    // fuelId: number;
    taskTitle: string;
    taskDescription: string;
    taskHasDone: boolean;
  }) {
    let addedID = this.taskElements.length;
    this.taskElements.push({
      id: addedID,
      title: taskData.taskTitle,
      description: taskData.taskDescription,
      hasDone: taskData.taskHasDone,
    });
    alert('Task Has Created');
  }

  taskDone(taskData: { taskId: number }) {
    this.taskElements[taskData.taskId].hasDone = true;
    this.taskElements[taskData.taskId].title = 'Doned Task!';
  }
  taskDeleted(taskData: { taskId: number }) {
    this.taskElements.splice(taskData.taskId, 1);
  }

  constructor() {}

  ngOnInit(): void {
    alert('welcome');
  }

  ngAfterViewInit(): void {
    console.log('daricontent');
    // alert('dari konten');
  }
}

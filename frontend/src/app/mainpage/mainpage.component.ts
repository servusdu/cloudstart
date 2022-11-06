import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from "../mock-task";
import { TaskService } from '../task.service';
import {MessageService} from "../massage.service";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private taskService: TaskService, private messageService: MessageService) { }
  selectedTask?: Task;
  Tasks: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }


  onSelect(task: Task): void {
    this.selectedTask = task;
    this.messageService.add("TaskComponent: Selected Task id=${task.id}");
  }

  getTasks(): void{
    this.taskService.getTasks().subscribe(TASKS => this.Tasks = TASKS);
  }
}

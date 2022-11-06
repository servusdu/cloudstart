import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS} from "./mock-task";
import { Observable, of } from "rxjs";
import { MessageService} from "./massage.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private messageService: MessageService) { }
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    this.messageService.add("TaskServide: fetched Tasks")
    return tasks;
  }
}

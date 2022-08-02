import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-iten.component.html',
  styleUrls: ['./task-iten.component.css'],
})
export class TaskItenComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    console.log('Delete from task-item' + task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    console.log('Toggle from task-item' + task);
    this.onToggleReminder.emit(task);
  }
}

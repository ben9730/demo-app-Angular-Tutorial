import { Component, OnInit } from '@angular/core';
//ng new appName, ng serve start
//ng generate component compName
//selector is html tag name we use
//template for the html we use
//{{}} to use dynamic variable
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('Toggle');
    this.uiService.toggleAddTask();
  }
}

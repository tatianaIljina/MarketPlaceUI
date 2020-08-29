import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  tabs = ['Сотрудники', 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}

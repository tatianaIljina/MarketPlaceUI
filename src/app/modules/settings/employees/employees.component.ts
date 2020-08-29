import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employees = [
      {
        Id: 'cbcd9e83-d5ba-42bc-adfe-c200feed6f80',
        Name: 'Павлова Ирина Геннадьевна',
        Position: 'Главный бухгалтер',
        Access: 'FULL',
        Email: 'pavlova@domain.ru',
      },
      {
        Id: '66e3e784-4b08-4238-98eb-5f3e60c1c67b',
        Name: 'Павлова Ирина Геннадьевна',
        Position: 'Генеральный директор',
        Access: 'FULL',
        Email: 'pavlova@domain.ru'
      }
    ]
  }

}

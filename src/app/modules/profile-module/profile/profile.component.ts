import { Component, OnInit } from '@angular/core';
import { Organization } from './../models/Organization';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  cardTitile = 'Профиль компании';
  company: Organization = new Organization();

  constructor() { 
    this.company.fullName = 'Company'
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    
  }

}

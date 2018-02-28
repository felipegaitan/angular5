import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './app-username.component.html',
  styleUrls: ['./app-username.component.css']
})
export class AppUsernameComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
  }

  resetUsername() {
    this.username = '';
  }

}

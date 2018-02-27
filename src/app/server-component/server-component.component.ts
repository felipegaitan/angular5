import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  serverId: number;
  serverText: string;

  constructor() {
    this.serverId = 12;
    this.serverText = 'server down';
  }

  ngOnInit() {
  }

}

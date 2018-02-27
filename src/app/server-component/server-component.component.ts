import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  serverId: number;
  serverText: string;
  allowNewServer: boolean;

  constructor() {
    this.serverId = 12;
    this.allowNewServer = true;
    this.serverText = 'server down';
    setTimeout(() => {
      this.allowNewServer = false;
    } , 2000 );
  }

  ngOnInit() {
  }

}

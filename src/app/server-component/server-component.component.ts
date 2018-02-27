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
  serverCreationStatus: string;

  constructor() {
    this.serverId = 12;
    this.allowNewServer = true;
    this.serverText = 'server down';
    this.serverCreationStatus = 'no server created!';
    setTimeout(() => {
      this.allowNewServer = false;
    } , 2000 );
  }

  ngOnInit( ) {
  }

  createServer() {
    this.serverCreationStatus = 'server created!';
  }

}

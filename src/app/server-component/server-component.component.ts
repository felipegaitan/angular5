import { Component, OnInit } from '@angular/core';
import { AppUtilities } from '../utilities/app.utilities';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  serverId: number;
  serverName: string;
  allowNewServer: boolean;
  serverCreationStatus: string;

  utilities = new AppUtilities();

  constructor() {
    this.serverId = this.utilities.randomNumber();
    this.allowNewServer = true;
    this.serverName = 'Original Server';
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

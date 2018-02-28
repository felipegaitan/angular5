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
  serverCreated: boolean;
  serverCreationStatus: string;

  utilities = new AppUtilities();

  constructor() {
    this.serverId = this.utilities.randomNumber();
    this.allowNewServer = false;
    this.serverCreated = false;
    this.serverName = '';
    this.serverCreationStatus = 'no server created!';
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000 );
  }

  ngOnInit( ) {
  }

  createServer() {
    if(!this.serverCreated){
      this.serverCreated = !this.serverCreated;
      this.serverCreationStatus = 'server created! The na is ' + this.serverName;
    }
  }

}

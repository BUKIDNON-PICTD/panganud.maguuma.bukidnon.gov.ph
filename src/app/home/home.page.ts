import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private items: any;
  private connected: any;
  private clientid: any;
  constructor(public socket: Socket) {
    this.connected = false;
    this.clientid = 'CLIENT1';

    this.socket.on('login', (data) => {
      this.connected = true;
      console.log(data.numServers + ' servers online');
    });

    this.socket.on('serveronline', (data) => {
      console.log(data.servername + ' is connected');
    });

    this.socket.on('serveroffline', (data) => {
      console.log(data.servername + ' is disconnected');
    });

    this.socket.on('disconnect', () => {
      console.log('you have been disconnected');
    });

    this.socket.on('message', (data) => {
      console.log('message from ' + data.servername + ' : ' + data.message);
    });

    this.socket.on('reconnect', () => {
      console.log('you have been reconnected');
      if (this.clientid) {
        this.socket.emit('checkinserveronline', this.clientid);
      }
    });

    this.socket.on('reconnect_error', () => {
      console.log('attempt to reconnect has failed');
    });
    // this.socket.on('Message', (data) => {
    //   data.forEach((x) => {
    //     if (x.setting) {
    //       x.setting = JSON.parse(x.setting);
    //     }
    //   });
    //   console.log(data[0].code);
    //   this.items = data;
    // });
  }
  ngOnInit() {
    this.socket.emit('checkinserveronline', this.clientid);
  }
}

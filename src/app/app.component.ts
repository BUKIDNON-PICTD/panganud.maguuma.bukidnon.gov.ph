import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Socket } from 'ng-socket-io';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public serverList: any;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'podium'
    },
    {
      title: 'Farmers List',
      url: '/farmerslist',
      icon: 'list'
    }
  ];

  private items: any;
  private connected: any;
  private clientid: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    public socket: Socket
  ) {
    this.initializeApp();
    this.connected = false;
    this.clientid = environment.clientcode;
    this.socket.on('connectedservers', (data) => {
      if (data != undefined) {
        this.serverList = [];
        data.serverList.forEach(element => {
          this.serverList.push(element);
        });
      }
    });
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
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.socket.emit('checkinserveronline', this.clientid);
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }

  logout() {
    this.authService.logout();
  }
}

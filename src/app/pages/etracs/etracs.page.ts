import { Component, OnInit } from '@angular/core';
import { EtracsService } from 'src/app/services/etracs.service';
import { environment } from 'src/environments/environment';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-etracs',
  templateUrl: './etracs.page.html',
  styleUrls: ['./etracs.page.scss'],
})
export class EtracsPage implements OnInit {
  dashdata: any;
  params: any;
  name: Object;

  constructor(
    private socket: Socket,
    public etracsService: EtracsService
    ) {
    this.dashdata = [];
    this.params = {
      reciever : 'rufy',
      sender : environment.clientcode,
      servicename	: 'TagabukidHRMISDashReportService',
      methodname	: 'getHello',
      message : 'Ralph'
    };

    this.socket.on('serverresponse', (data) => {
      this.name = data;
    });
   }

  ngOnInit() {
    this.socket.emit('serverrequest', this.params);
  }

}

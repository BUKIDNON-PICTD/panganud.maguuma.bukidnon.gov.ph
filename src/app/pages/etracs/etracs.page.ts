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
  maleList: any;

  constructor(
    private socket: Socket,
    public etracsService: EtracsService
    ) {
    this.dashdata = [];
    this.params = {
      reciever : 'pora',
      sender : environment.clientcode,
      servicename	: 'TagabukidHRMISDashReportService',
      methodname: 'getMale',
      message : 'Ralph'
    };

    this.socket.on('serverresponse', (data) => {
      if (data.servicename === this.params.servicename && data.methodname === this.params.methodname) {
        this.maleList = data.result;
      }
      console.log(this.name);
    });
   }

  ngOnInit() {
    this.socket.emit('serverrequest', this.params);
  }

}

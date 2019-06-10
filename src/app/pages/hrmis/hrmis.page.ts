import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { environment } from '../../../environments/environment';
import { EtracsService } from 'src/app/services/etracs.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-hrmis',
  templateUrl: './hrmis.page.html',
  styleUrls: ['./hrmis.page.scss'],
})
export class HrmisPage implements OnInit {
  public params: any;
  public dashdata: any;
  constructor(
    private socket: Socket,
    public etracsService: EtracsService
  ) {
    this.dashdata = [];
    this.params = {
      reciever : 'rufy',
      sender : environment.clientcode,
      servicename	: 'TagabukidHRMISDashReportService',
      methodname	: 'getDash'
    };

    this.socket.on('serverresponse', (data) => {
      this.dashdata = data;
    });
  }

  ngOnInit() {
    this.socket.emit('serverrequest', this.params);
    // this.etracsService.serverrequest(this.params).subscribe(res => {
    //   // console.log(JSON.stringify(res));
    //   this.dashdata = res;
    //   // this.agridata = res;
    //   // // console.log(this.agridata);
    //   // this.barChartLabels = this.agridata.agridashqty.map(function(a) {return a.MUNICIPALITY;});
    //   // this.barChartOptions = {
    //   //   responsive: true,
    //   //   scales: { xAxes: [{}], yAxes: [{}] },
    //   //   plugins: {
    //   //     datalabels: {
    //   //       anchor: 'end',
    //   //       align: 'end',
    //   //     }
    //   //   }
    //   // };

    //   // this.barChartData = [
    //   //   {
    //   //     data: this.agridata.agridash.map(function(a) {
    //   //     return a.CORN;
    //   //     }),
    //   //     label: 'CORN'
    //   //   },
    //   //   {
    //   //     data: this.agridata.agridash.map(function(a) {
    //   //     return a.RICE;
    //   //     }),
    //   //     label: 'RICE'
    //   //   }
    //   //   // ,
    //   //   // {
    //   //   //   data: this.agridata.agridash.map(function(a) {
    //   //   //   return a.VEGETABLE;
    //   //   //   }),
    //   //   //   label: 'VEGETABLE'
    //   //   // },
    //   //   // {
    //   //   //   data: this.agridata.agridash.map(function(a) {
    //   //   //   return a.INDUSTRIAL.CROPS;
    //   //   //   }),
    //   //   //   label: 'INDUSTRIAL CROPS'
    //   //   // }
    //   // ];

    //   // this.barChartData2 = [
    //   //   {
    //   //       data: this.agridata.agridash.map(function(a) {
    //   //       return a.VEGETABLE;
    //   //       }),
    //   //       label: 'VEGETABLE'
    //   //     },
    //   //     {
    //   //       data: this.agridata.agridash.map(function(a) {
    //   //       return a.INDUSTRIAL.CROPS;
    //   //       }),
    //   //       label: 'INDUSTRIAL CROPS'
    //   //     }
    //   //   ];


    //   // console.log(this.barChartData);
    // });
  }

}

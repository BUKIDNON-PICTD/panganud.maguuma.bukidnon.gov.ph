import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Socket } from 'ng-socket-io';
import { environment } from '../../../environments/environment';
import { FarmerService } from 'src/app/services/farmer.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-etracs',
  templateUrl: './etracs.page.html',
  styleUrls: ['./etracs.page.scss'],
})
export class EtracsPage implements OnInit {
  dashrpu: any;
  params: any;
  name: Object;
  public barChartOptions: ChartOptions;
  public barChartLabels: Label[];
  public barChartData: ChartDataSets[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  constructor(
    private socket: Socket,
    public etracsService: EtracsService
    
    ) {
    this.dashrpu = [];
    this.params = {
      reciever : 'jade',
      sender : environment.clientcode,
      servicename	: 'EtracsDashReportService',
      methodname	: 'getRpudash'
    };

    this.socket.on('serverresponse', (data) => {
      if (data.servicename === this.params.servicename && data.methodname === this.params.methodname) {
        this.dashrpu = data.result;
      }
    });

    this.barChartLabels = this.dashrpu.map(function(a) {
      return  a.name;
    });
    this.barChartOptions = {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    };
   }

  ngOnInit() {
    this.socket.emit('serverrequest', this.params);
  }

}

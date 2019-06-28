import { Component, OnInit } from '@angular/core';
import { EtracsService } from 'src/app/services/etracs.service';
import { environment } from 'src/environments/environment';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Socket } from 'ng-socket-io';
import { Label, SingleDataSet } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FarmerService } from 'src/app/services/farmer.service';
import { ViewChild } from '@angular/core';
import { IonSlide } from '@ionic/angular';


@Component({
  selector: 'app-etracs',
  templateUrl: './etracs.page.html',
  styleUrls: ['./etracs.page.scss'],
})
export class EtracsPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  dashrpu: any;
  params: any;
  name: Object;


  public barChartOptions: ChartOptions;
  public barChartLabels: Label[];
  public barChartData: ChartDataSets[];
  // public barChartData2: ChartDataSets[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];


  public barChartLabelsRPUDash: Label[];
  public barChartDataRPUDash: ChartDataSets[];
  public barChartDataRPUDash2: ChartDataSets[];

  public polarAreaChartLabels: Label[];
  public polarAreaChartData: SingleDataSet;
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  constructor(
    private socket: Socket,
    public etracsService: EtracsService

    ) {
    this.dashrpu = [];
    this.params = {
      reciever : 'pora',
      sender : environment.clientcode,
      servicename	: 'EtracsDashReportService',
      methodname: 'dashRPU'
    };

    this.socket.on('serverresponse', (data) => {
      if (data.servicename === this.params.servicename && data.methodname === this.params.methodname) {
        this.dashrpu = data.result;
      }

      this.barChartLabelsRPUDash = this.dashrpu.rpudash.map(function (a) {
        return a.LGU;
      });
      this.barChartDataRPUDash = [
        {
          data: this.dashrpu.rpudash.map(function (a) {
            return a.LAND;
          }),
          label: 'LAND'
        },
        {
          data: this.dashrpu.rpudash.map(function (a) {
            return a.BLDG;
          }),
          label: 'BLDG'
        }
      ];
      this.barChartDataRPUDash2 = [
        {
          data: this.dashrpu.rpudash.map(function (a) {
            return a.MACH;
          }),
          label: 'MACHINERY'
        },
        {
          data: this.dashrpu.rpudash.map(function (a) {
            return a.PLANTTREE;
          }),
          label: 'PLANT TREE'
        },
        {
          data: this.dashrpu.rpudash.map(function (a) {
            return a.MISC;
          }),
          label: 'MISC'
        }
      ];

      // this.barChartLabels = this.dashrpu.rpudashtotalhr.map(function (a) {
      //   return a.LGU;
      // });
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

      // this.polarAreaChartLabels = this.dashrpu.rpudashtotalhr[0].map(function (a) {
      //   return a.LGU;
      // });
      // this.polarAreaChartData = [
      //   this.dashrpu.rpudashtotalhr[0].map(function (a) {
      //     return a.LAND;
      //   })
      // ];
    });
}

  ngOnInit() {
    this.socket.emit('serverrequest', this.params);
  }

}

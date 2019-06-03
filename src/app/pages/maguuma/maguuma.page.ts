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
  selector: 'app-maguuma',
  templateUrl: './maguuma.page.html',
  styleUrls: ['./maguuma.page.scss'],
})
export class MaguumaPage implements OnInit {
  data: any;
    public agridata: any;
    public params: any;
    public serverList: any;
  
    public barChartOptions: ChartOptions;
    public barChartLabels: Label[];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];
  
    public barChartData: ChartDataSets[];
    public barChartData2: ChartDataSets[];
  
    constructor(
      private authService: AuthService,
      private storage: Storage,
      private toastController: ToastController,
      private socket: Socket,
      public farmerService: FarmerService
    ) {
      this.agridata = [];
      this.serverList = [];
      this.params = {
          reciever : 'bukidnon',
          sender : environment.clientcode,
          servicename	: 'FarmerProfileService',
          methodname	: 'dash'
        };
      this.socket.on('connectedservers', (data) => {
        if (data != undefined) {
          this.serverList = [];
          data.serverList.forEach(element => {
            this.serverList.push(element);
          });
        }
      });
    }
  
    ngOnInit() {
      this.farmerService.serverrequest(this.params).subscribe(res => {
        this.agridata = res;
        // console.log(this.agridata);
        this.barChartLabels = this.agridata.agridashqty.map(function(a) {return a.MUNICIPALITY;});
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
  
        this.barChartData = [
          {
            data: this.agridata.agridash.map(function(a) {
            return a.CORN;
            }),
            label: 'CORN'
          },
          {
            data: this.agridata.agridash.map(function(a) {
            return a.RICE;
            }),
            label: 'RICE'
          }
          // ,
          // {
          //   data: this.agridata.agridash.map(function(a) {
          //   return a.VEGETABLE;
          //   }),
          //   label: 'VEGETABLE'
          // },
          // {
          //   data: this.agridata.agridash.map(function(a) {
          //   return a.INDUSTRIAL.CROPS;
          //   }),
          //   label: 'INDUSTRIAL CROPS'
          // }
        ];
  
        this.barChartData2 = [
          {
              data: this.agridata.agridash.map(function(a) {
              return a.VEGETABLE;
              }),
              label: 'VEGETABLE'
            },
            {
              data: this.agridata.agridash.map(function(a) {
              return a.INDUSTRIAL.CROPS;
              }),
              label: 'INDUSTRIAL CROPS'
            }
          ];
  
  
        // console.log(this.barChartData);
      });
  
      // // const total = this.agridata.agridashqty.map(function(a) {return a.amount;}).reduce(function(a, b) { return a + b; }, 0);
      // const data = {
      //     labels: this.agridata.agridashqty.map(function(a) {return a.MUNICIPALITY;}),
      //     datasets: [
      //       {
      //         label: "Commodity Summary",
      //         backgroundColor: "#dd4b39",
      //         borderColor: "#dd4b39",
      //         data: this.agridata.agridashqty.map(function(a) {return a.CORN;})
      //       }
      //     ]
      //   };
      // var barChartCanvas = $("#barChart").get(0).getContext("2d");
      // var myBarChart = new Chart(barChartCanvas, {
      //     type: 'bar',
      //     data: data,
      //     options: {
      //           responsive: true,
      //           maintainAspectRatio: false,
      //           events: false,
      //           //  tooltips: {
      //           //     enabled: false
      //           // },
      //           // hover: {
      //           //     animationDuration: 0
      //           // },
      //           // animation: {
      //           //     duration: 1,
      //           //     onComplete: function () {
      //           //         var chartInstance = this.chart,
      //           //         ctx = chartInstance.ctx;
      //           //         ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
      //           //         ctx.textAlign = 'center';
      //           //         ctx.textBaseline = 'bottom';
  
      //           //         this.data.datasets.forEach(function (dataset, i) {
      //           //             var meta = chartInstance.controller.getDatasetMeta(i);
      //           //             meta.data.forEach(function (bar, index) {
      //           //                 data = dataset.data[index];                            
      //           //                 ctx.fillText(format2(data,"P"), bar._model.x, bar._model.y -100);
      //           //             });
      //           //         });
      //           //     }
      //           // }
      //     }
      // });
    }
  
    // loadSpecialInfo() {
    //   this.authService.getSpecialData().subscribe(res => {
    //     this.data = res['msg'];
    //   });
    // }
  
    // logout() {
    //   this.authService.logout();
    // }
  
    // clearToken() {
    //   // ONLY FOR TESTING!
    //   this.storage.remove('access_token');
  
    //   let toast = this.toastController.create({
    //     message: 'JWT removed',
    //     duration: 3000
    //   });
    //   toast.then(toast => toast.present());
    // }
  }
  

    
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { EtracsService } from 'src/app/services/etracs.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gisportal',
  templateUrl: './gisportal.page.html',
  styleUrls: ['./gisportal.page.scss'],
})
export class GisportalPage implements OnInit {
  public params: any;
  public data: any;
  public mappath: any;

  constructor(
    public etracsService: EtracsService,
    private router: Router
    ) {
      this.data = [];
      this.params = {
        reciever : 'bukidnon',
        sender : environment.clientcode,
        servicename	: 'TagabukidHRMISDashReportService',
        methodname	: 'getGeoMaps'
      };
    }

  ngOnInit() {
    this.etracsService.getmaps().subscribe(res => {
      Object(res).forEach(function(element) {
        element.url = environment.mappath + element.foldername;
        element.id = element.foldername;
      });
      this.data = res;
    });
  }

  gotoMap(d) {
    this.router.navigate(['map/' + d.id]);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Socket } from 'ng-socket-io';
import { environment } from '../../../environments/environment';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-farmerslist',
  templateUrl: './farmerslist.page.html',
  styleUrls: ['./farmerslist.page.scss'],
})
export class FarmerslistPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public dataList: any;
  public resList: any;
  public start: number;
  public limit: number;
  public rowsize: number;
  public searchtext = '';
  public params: any;
  constructor(
    public socket: Socket,
    public farmerService: FarmerService
    ) {
    this.dataList = [];
    this.resList = [];
    this.rowsize = 25;
    this.start = 0;
    this.limit = 25;
    this.params = {
      reciever : 'bukidnon',
      sender : environment.clientcode,
      servicename	: 'FarmerProfileService',
      methodname	: 'getFarmersList',
      paging 		: {
        start : this.start,
        limit : this.limit
      },
      searchtext: this.searchtext
    };
   
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.start = this.start + this.rowsize;
      this.farmerService.serverrequest(this.params).subscribe(res => {
        this.resList = res;
        this.resList.forEach(element => {
          element.no =  this.dataList.length;
          this.dataList.push(element);
        });
      });
      event.target.complete();
      if (this.dataList.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
  setFilteredItems() {
    this.dataList = [];
    this.farmerService.serverrequest({
      reciever : 'bukidnon',
      sender : environment.clientcode,
      servicename	: 'FarmerProfileService',
      methodname	: 'getFarmersList',
      paging 		: {
        start : 0,
        limit : 25
      },
      searchtext: this.searchtext
    }).subscribe(res => {
        this.resList = res;
        this.resList.forEach(element => {
          element.no =  this.dataList.length;
          this.dataList.push(element);
        });
    });
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ngOnInit() {
    this.farmerService.serverrequest(this.params).subscribe(res => {
      this.resList = res;
      this.resList.forEach(element => {
        element.no =  this.dataList.length;
        this.dataList.push(element);
      });
    });
  }
}

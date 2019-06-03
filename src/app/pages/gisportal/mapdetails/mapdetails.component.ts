import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapdetails',
  templateUrl: './mapdetails.component.html',
  styleUrls: ['./mapdetails.component.scss'],
})
export class MapdetailsComponent implements OnInit {
  public url: any;
  public mapid: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.mapid = this.route.snapshot.paramMap.get('id');
    console.log(this.mapid);
    this.url = environment.mappath + this.mapid;
  }

}

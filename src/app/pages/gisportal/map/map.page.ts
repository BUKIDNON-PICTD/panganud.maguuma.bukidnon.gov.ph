import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  mapid: any;
  url: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.mapid = this.route.snapshot.paramMap.get('id');
    console.log(this.mapid);
    this.url = environment.mappath + this.mapid;
  }

}

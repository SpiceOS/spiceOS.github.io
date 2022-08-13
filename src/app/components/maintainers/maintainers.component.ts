import { Component, OnInit } from '@angular/core';
import * as dfd from '../../../assets/json/download_handler.json';
import axios from 'axios';

@Component({
  selector: 'app-maintainers',
  templateUrl: './maintainers.component.html',
  styleUrls: ['./maintainers.component.scss']
})
export class MaintainersComponent implements OnInit {

  constructor() { }
  maintainer:any;
  all_maintainers:any =[];

  ngOnInit(): void {
    let defed = dfd;
    this.maintainer = defed.data;
    this.getalldata();
  }

  getalldata(){
    this.maintainer.forEach((e:any,index:number) => {
        axios.get(e.ota_json).then((res)=>{
          let splitter = res.data.response[0].filename.split("-")
          res.data.response[0].device_codename = splitter[5];
          console.log(res.data.response[0]);
          this.all_maintainers.push(res.data.response[0]);
          console.log(this.all_maintainers);
        })
      });
  }

}

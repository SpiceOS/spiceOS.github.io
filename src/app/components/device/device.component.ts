import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as dfd from '../../../assets/json/download_handler.json';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  download:any;
  AllDeviceData:any;
  constructor() { }

  ngOnInit(): void {
    let defed = dfd;
    this.download = defed.data;
    this.AllDeviceData = [];
    this.getalldata();
    console.log(this.AllDeviceData);    
  }

  getalldata(){
    this.download.forEach((e:any,index:number) => {
        axios.get(e.ota_json).then((res)=>{
          // console.log(res.data.response[0]);
          this.AllDeviceData.push(res.data.response[0]);
        })
        axios.get(e.changelogs).then((res)=>{
          Object.assign(this.AllDeviceData[index],{"changelogs":res.data})
        })
      });
  }

}

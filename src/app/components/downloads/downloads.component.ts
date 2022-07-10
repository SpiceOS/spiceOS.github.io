import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as dfd from '../../../assets/json/download_handler.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  download:any;
  AllDeviceData:any;
  constructor(private routes: Router) { }

  ngOnInit(): void {
    let defed = dfd;
    this.download = defed.data;
    this.AllDeviceData = [];
    this.getalldata();
    console.log(this.AllDeviceData);
  }

  getalldata(){
    this.AllDeviceData = [...this.download]    
    this.download.forEach((e:any,index:number) => {
        axios.get(e.ota_json).then((res)=>{
          this.AllDeviceData[index].ota_json = res.data.response[0];
        })
      });
  }

  navigatetodevicedownload(device:any){
  this.routes.navigate(['downloads/'+device]);
  }

}

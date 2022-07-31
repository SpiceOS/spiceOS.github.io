import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as dfd from '../../../assets/json/download_handler.json';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  download:any;
  AllDeviceData:any;
  FilteredDeviceData:any;
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
          let splitter = res.data.response[0].filename.split("-")
          res.data.response[0].build_date = splitter[3];
          res.data.response[0].build_date = moment(res.data.response[0].build_date).format('MMMM DD YYYY');
        })
      });
      this.FilteredDeviceData = this.AllDeviceData;
  }

  navigatetodevicedownload(device:any){
  this.routes.navigate(['downloads/'+device]);
  }

  Search(e: any){
  const filterValue = e.value.toLowerCase();
  this.FilteredDeviceData =  this.AllDeviceData.filter((e: {
    device_codename: any; device_name: string; 
}) => (e.device_name.toLowerCase().indexOf(filterValue) === 0) || (e.device_codename.toLowerCase().indexOf(filterValue) === 0));
  }

}

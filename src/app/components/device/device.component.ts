import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as dfd from '../../../assets/json/download_handler.json';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  download:any;
  AllDeviceData:any;
  id:string
  device:any;
  constructor(private router:ActivatedRoute) { 
    this.id=this.router.snapshot.params['id']
  }

  ngOnInit(): void {
    let defed = dfd;
    this.download = defed.data;
    this.AllDeviceData = [];
    this.getalldata();  
    console.log(this.AllDeviceData);
    this.filterDevice();
  }

  getalldata(){
    this.AllDeviceData = [...this.download]
    this.download.forEach((e:any,index:number) => {
        axios.get(e.ota_json).then((res)=>{
          let splitter = res.data.response[0].filename.split("-")
          res.data.response[0].build_date = splitter[2];
          res.data.response[0].build_date = moment(res.data.response[0].build_date).format('MMMM DD YYYY');
          res.data.response[0].previous_build = res.data.response[0].download.split("SpiceOS");
          // console.log(res.data.response[0].download.split("SpiceOS"))
          this.AllDeviceData[index].ota_json = res.data.response[0];
        })
        axios.get(e.changelogs).then((res2)=>{
          this.AllDeviceData[index].changelogs = res2.data;
        })
      });
  }

  filterDevice(){
    this.device = this.AllDeviceData.filter((s: { device_codename: string | any[]; }) => s.device_codename.includes(this.id))
    console.log(this.device);
  }

}

import { Component, OnInit } from '@angular/core';
import * as story from '../../../assets/json/story_time.json';
import * as corepeps from '../../../assets/json/core_devs.json';
import * as dfd from '../../../assets/json/download_handler.json';
import axios from 'axios';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  fullStory:any;
  core_Devs:any;
  maintainer:any;
  all_maintainers:any =[];
  constructor() { }

  ngOnInit(): void {
    let defed = dfd;
    this.maintainer = defed.data;
    let story_temp = story;
    let corepep = corepeps;
    this.fullStory = story_temp.data;
    this.core_Devs = corepep.data;
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

import { Component, OnInit } from '@angular/core';
import * as story from '../../../assets/json/story_time.json';
import * as corepeps from '../../../assets/json/core_devs.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  fullStory:any;
  core_Devs:any;
  constructor() { }

  ngOnInit(): void {
    let story_temp = story;
    let corepep = corepeps;
    this.fullStory = story_temp.data;
    this.core_Devs = corepep.data;
  }

}

import { Component, OnInit } from '@angular/core';
import * as feter from '../../../assets/json/features.json';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }
  features:any
  ngOnInit(): void {
    let fetr = feter
    this.features = fetr.data;
  }

}

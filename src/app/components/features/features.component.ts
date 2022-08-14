import { Component, OnInit } from '@angular/core';
import { SlidesOutputData , OwlOptions } from 'ngx-owl-carousel-o';
import * as feter from '../../../assets/json/features.json';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  dynamicSlides = [
    {
      id: "1",
      src:'https://raw.githubusercontent.com/SpiceOS/xda_template/12.1/Screenshots/msg-1608443222-143.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: "2",
      src:'https://raw.githubusercontent.com/SpiceOS/xda_template/12.1/Screenshots/msg-1608443222-145.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: "3",
      src:'https://raw.githubusercontent.com/SpiceOS/xda_template/12.1/Screenshots/msg-1608443222-144.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: "4",
      src:'https://raw.githubusercontent.com/SpiceOS/xda_template/12.1/Screenshots/msg-1608443222-147.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: "5",
      src:'https://raw.githubusercontent.com/SpiceOS/xda_template/12.1/Screenshots/msg-1608443222-148.jpg',
      alt:'Side 5',
      title:'Side 5'
    }
  ];

  constructor() { }
  features:any
  ngOnInit(): void {
    let fetr = feter
    this.features = fetr.data;
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsEach:true,
    items : 3,
    margin: 20,
    autoHeight : true,
    smartSpeed :900,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 5
      },
    },
    nav: false
  }

}

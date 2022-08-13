import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'SpiceOS';
  constructor(private meta:Meta , private titleMeta: Title ) { }

  ngOnInit(): void {
    this.meta.addTags([
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "keywords", content:"SpiceOS ,Unleash the Power of Android" },
      { name: 'author', content: 'SpiceOS' },
      { name: 'Custom Rom', content: 'SpiceOS, Android,Latest Android,Up to Date' }
    ]);
    this.titleMeta.setTitle(this.title);    
  }

}

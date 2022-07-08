import { Component, OnInit } from '@angular/core';
import * as changes from '../../../assets/json/changelogs.json';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  changelogs:any;
  constructor() { }

  ngOnInit(): void {
    let change = changes;
    this.changelogs = change.data.slice().reverse();
  }

}

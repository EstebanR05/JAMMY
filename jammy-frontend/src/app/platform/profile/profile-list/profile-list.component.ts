import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  select1: boolean = true;
  select2: boolean = false;
  select3: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  home(){
    this.select1 = true;
    this.select2 = false;
    this.select3 = false;
  }

  homeWork(){
    this.select1 = false;
    this.select2 = true;
    this.select3 = false;
  }

  table(){
    this.select1 = false;
    this.select2 = false;
    this.select3 = true;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  ischild=true;

  constructor() {
    console.log("parent constructor is called");
   }

  ngOnInit(): void {
    console.log("child OnInit is called");

  }
  togglechild(){
    this.ischild=!this.ischild;
  }

}

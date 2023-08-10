import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {
  counter=0;
  interval:any;
  channelName ="";

  constructor() {
    console.log("child constructor is called");
   }

  ngOnInit(): void {
    console.log("child OnInit is called");

    //this.interval=setInterval(() => {
    //  this.counter = this.counter + 1;
    //  console.log(this.counter);
    //}, 1000);
  }

  ngOnDestroy(){
   // clearInterval(this.interval);
    console.log("child OnDestroy is called");
  }

}

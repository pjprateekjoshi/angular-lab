import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  writeInDiv = "I'm property binding to implement String interpolation";
  lightStatus = "Light is off";
  isDisabled = true;
  sameAsInput = "Initial";
  constructor() {
    setTimeout(()=>{
      this.isDisabled = !this.isDisabled
    },3000);
  }
  ngOnInit() {
  }

  onSubmit(){
    this.lightStatus = "Light is on!";
  }

  onInput(event:Event){
    this.sameAsInput = (<HTMLInputElement>event.target).value;
  }
}

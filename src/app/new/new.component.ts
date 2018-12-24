import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  isDisabled = false;
  constructor() {
    setTimeout(()=>{
      this.isDisabled = !this.isDisabled
    },3000)
  }
  ngOnInit() {
  }

}

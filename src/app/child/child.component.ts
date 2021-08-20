import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  txtChildData: any;
  dataReceived: any;

  @Input() 
  messageFromParent = '';

  @Output() 
  newParentEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.txtChildData = "";
    this.dataReceived = "NA";
    console.log(this.messageFromParent);
  }

  sendDataToParent() {
    this.newParentEvent.emit(this.txtChildData);
  }

  clearData() {
    this.messageFromParent = "";
    this.txtChildData = "";
  }

}

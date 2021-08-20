import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data : any;
  parentData : string;
  dataReceived: any;

  ngOnInit(): void {
    this.parentData = "";
    this.dataReceived = "";
  }
  sendData() {
    this.parentData = this.data;
  }
  getDataFromChild(data: string) {
    this.dataReceived = data;
  }
  clearData() {
    this.dataReceived = "";
    this.data = "";
  }

}

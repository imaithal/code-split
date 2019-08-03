import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nyan',
  // templateUrl: './nyan.component.html',
  template: '<img src="https://raw.githubusercontent.com/mgechev/code-splitting-web-dev/lazy/src/assets/nyan.png">',
  styleUrls: ['./nyan.component.css']
})
export class NyanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

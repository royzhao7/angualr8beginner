import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public displayName = true;
 public hasError = true;
 public zhaoshuai;
 public color = 'red';
 public colors = ['red', 'blue', 'white'];
  constructor() { }

  ngOnInit() {

  }
  onClick(event) {
      alert(event);
      this.zhaoshuai = event.type;
  }

  logmessage(value) {

alert(value);
  }
}

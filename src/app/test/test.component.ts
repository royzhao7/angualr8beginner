import { Test } from './test.model';

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TestService } from '../test.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: ['./test.component.css']
})
export class TestComponent implements OnInit {
public test = new Test('222', '333');
 public displayName = true;
 public hasError = true;
 public zhaoshuai;
 public color = 'red';
 public colors = ['red', 'blue', 'white'];
 public errorMessage;

 @Output() public childEvent = new EventEmitter();
  // tslint:disable-next-line: no-input-rename
  @Input('parentData') public hehe;

  // tslint:disable-next-line: typedef-whitespace
  constructor(private testserice : TestService) {
  }
public huhu: IEmployee[];

  ngOnInit() {
 this.testserice.getBOBO().subscribe(data => this.huhu = data
  , error => this.errorMessage = error);
  }
  onClick(event) {
      alert(event);
      this.zhaoshuai = event.type;
  }

  logmessage(value) {

alert(value);

  }

  fireEvent() {
      this.childEvent.emit('hey zhaoshuai');
  }
}

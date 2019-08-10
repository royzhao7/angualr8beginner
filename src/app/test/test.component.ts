
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TestService } from '../test.service';

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
 @Output() public childEvent = new EventEmitter();
  // tslint:disable-next-line: no-input-rename
  @Input('parentData') public hehe;

  // tslint:disable-next-line: typedef-whitespace
  constructor(private testserice : TestService) { }
public huhu = [];
  ngOnInit() {
 this.testserice.getBOBO().subscribe(data => this.huhu = data);
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

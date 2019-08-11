import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public addition;
  public sutraction;
  constructor(private _arithmatic: ArithmaticService) { }

  ngOnInit() {
    this.addition = this._arithmatic.add(10, 20);
    this.sutraction = this._arithmatic.sub(100, 20);
  }

}

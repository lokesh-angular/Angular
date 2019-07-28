import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-child-comp',
    templateUrl: './child-comp.component.html',
    styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

    @Input() public dataFromParent;
    @Output() eventEmmitorObj = new EventEmitter();
    
    ngOnInit() {
        console.log("Inside init");
    }
    
    constructor() {
        console.log("Inside constructor");
    }

    ngOnDestroy() {
        console.log("Inside destroy");
    }

    public sendMessageToParent() {
        this.eventEmmitorObj.emit("Hello From Child");
    }

}

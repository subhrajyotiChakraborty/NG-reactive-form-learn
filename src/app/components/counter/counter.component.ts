import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.less']
})

export class CounterComponent implements OnInit {

    count = 1;

    constructor() { }

    ngOnInit() { }

    increase() {
        //
    }

    decrease() {
        //
    }

    reset() {
        //
    }
}

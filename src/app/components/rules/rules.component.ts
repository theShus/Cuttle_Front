import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    overlayVisible: boolean = false;


    showOverlay() {
        this.overlayVisible = true;
    }

    closeOverlay() {
        this.overlayVisible = false;
    }

}

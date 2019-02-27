import { Component, OnInit, Input, EventEmitter, ViewChild, Output, ViewEncapsulation, ElementRef} from '@angular/core';

@Component({
    selector: 'app-success-input',
    templateUrl: './success-input.component.html',
    styleUrls: ['./success-input.component.css'],
    encapsulation: ViewEncapsulation.Emulated

})
export class SuccessInputComponent implements OnInit {


    @Input('access-to-Element') element: {type: string, name: string, content: string, QR: string};


  constructor() { }

  ngOnInit() {
  }

}




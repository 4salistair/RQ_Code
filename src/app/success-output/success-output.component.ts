import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-success-output',
  templateUrl: './success-output.component.html',
  styleUrls: ['./success-output.component.css']
})
export class SuccessOutputComponent implements OnInit {

  @Output() createdElement = new EventEmitter<{Name: string, Content: string, QR: String}>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(NameElement: HTMLInputElement, ContentElement: HTMLInputElement, QRcodethis: HTMLInputElement){

    this.createdElement.emit({
      Name: NameElement.value,
      Content: ContentElement.value,
      QR: QRcodethis.value
});

  }
}
// for info please last time again!!!
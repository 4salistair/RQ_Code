import { Component } from '@angular/core';
//import { createElement } from '@angular/core/src/view/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 setElements = [];


  onAdd( createdElememt: {Name: string, Content: string, QR: string }) {
    this.setElements.push({
    type: 'server',
    name: createdElememt.Name,
    content: createdElememt.Content,
    QR: createdElememt.QR
  });
}

}

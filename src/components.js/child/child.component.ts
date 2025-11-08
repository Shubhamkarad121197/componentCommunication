import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
   @Input() name: any;
   @Output() messageEvent=new EventEmitter<string>()

   
  ngOnInit() {
    console.log(this.name)
  }
 

  sendMessage(){
    this.messageEvent.emit('Hello I am button From child and render in Parent component')
  }



}

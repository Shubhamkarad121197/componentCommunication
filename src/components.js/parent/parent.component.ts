import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ChangeBgColorDirective } from '../../app/directives/change-bg-color.directive';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,ChangeBgColorDirective],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  userName:string='Shubham';
  message:string=''
  sendMessage(event:any){
    this.message=event
  }


}

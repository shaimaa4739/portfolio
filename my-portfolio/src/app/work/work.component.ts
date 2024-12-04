import { Component } from '@angular/core';
import { NavLinks } from '../models/navLinks';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  showdiv: boolean=false
  show(){
    this.showdiv = true 
  }

}

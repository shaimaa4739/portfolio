import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  downloadFile(){
    const link = document.createElement('a');
    link.href = '../../assets/pdfs/Frontend Developer Shaimaa Khalil.pdf'; 
    link.download = 'Frontend Developer Shaimaa Khalil.pdf'; 
    link.click();
  }
}

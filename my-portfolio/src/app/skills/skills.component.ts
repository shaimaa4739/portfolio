import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  blueSliderValue: string = '75%';  
  blueProgressBarWidth: number = 75;  

  redSliderValue: string = '60%';  
  redProgressBarWidth: number = 60;  

  yellowSliderValue: string = '85%';  
  yellowProgressBarWidth: number = 85;  

  greenSliderValue: string = '90%';  
  greenProgressBarWidth: number = 90;  

  purpleSliderValue: string = '70%';  
  purpleProgressBarWidth: number = 70;  

  darkblueSliderValue: string = '80%';  
  darkblueProgressBarWidth: number = 80;  
}

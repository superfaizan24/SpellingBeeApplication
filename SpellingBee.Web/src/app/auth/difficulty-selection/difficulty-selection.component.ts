import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-difficulty-selection',
  templateUrl: './difficulty-selection.component.html',
  styleUrls: ['./difficulty-selection.component.scss']
})
export class DifficultySelectionComponent {
  selectedDifficulty:number;
  email=JSON.parse(localStorage.getItem('user'));
  
  

   constructor(private SharedService:SharedService){}

  confirm() {
    const userPreference = {
      user: { email: this.email },
      preference: { difficulty: this.selectedDifficulty }
    };
  
    this.SharedService.selectDifficulty(userPreference).subscribe(res => {
      alert(res.toString());
    });
  }
  

  

}

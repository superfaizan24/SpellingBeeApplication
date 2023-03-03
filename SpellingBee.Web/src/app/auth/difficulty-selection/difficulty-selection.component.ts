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
  // selectedImage: string = '';
  // checkboxes: boolean[] = [false, false, false];

  // toggleCheckbox(index: number): void {
  //   this.checkboxes[index - 1] = !this.checkboxes[index - 1];
  // }

  // selectImage(index: number): void {
  //   this.checkboxes.fill(false);
  //   this.checkboxes[index - 1] = true;
  //   this.selectedImage = `Image ${index}`;
  // }

  // confirmSelection(): void {
  //   const selectedImageIndex = this.checkboxes.findIndex(checkbox => checkbox === true);
  //   if (selectedImageIndex >= 0) {
  //     this.selectedImage = `Image ${selectedImageIndex + 1}`;
  //   } else {
  //     this.selectedImage = '';
  //   }
  // }


  



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
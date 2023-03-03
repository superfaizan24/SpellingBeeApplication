import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DifficultySelectionComponent} from './difficulty-selection/difficulty-selection.component';

const routes: Routes = [
  {
    path: 'difficulty-selection',
    component: DifficultySelectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

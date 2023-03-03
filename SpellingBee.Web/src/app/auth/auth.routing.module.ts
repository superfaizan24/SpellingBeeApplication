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
export class AuthenticationRoutingModule { } /* Error occurs on this line; this is the error message even though my Experimental decorators is set to true in tsconfig: 
"Experimental support for decorators is a feature that is subject to change in a future release. 
Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning."
*/

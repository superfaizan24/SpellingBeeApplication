import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContentComponent } from "./shared/components/layout/content/content.component";
import { FullComponent } from "./shared/components/layout/full/full.component";
import { full } from "./shared/routes/full.routes";
import { content } from "./shared/routes/routes";
import { SimpleComponent } from './pages/coming-soon/simple/simple.component';

import { AdminGuard } from './shared/guard/admin.guard';
import { DifficultySelectionComponent } from './auth/difficulty-selection/difficulty-selection.component';
import { RegisterSimpleComponent } from './pages/authentication/register/simple/simple.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent 
  },
  {
    path: 'authentication/register/simple',
    component: RegisterSimpleComponent
  },
  {
    path: '',
    component: ContentComponent,
    canActivate: [AdminGuard],
    children: content
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AdminGuard],
    children: full
  },
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
  
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
})],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

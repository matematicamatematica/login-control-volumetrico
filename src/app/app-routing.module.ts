import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login/components/login-screen/login-screen.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: 'administracion-de-usuarios',
    loadChildren: () => 
      import('./users-management/users-management.module')
      .then( m => m.UsersManagementModule ),
    canLoad: [],
    canActivate: [],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from 'src/app/auth/components/register/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  declarations: [
    RegisterComponent
  ]
})
export class AuthModule {

}

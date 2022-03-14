import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from 'src/app/auth/components/register/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [
    RegisterComponent
  ]
})
export class AuthModule {

}

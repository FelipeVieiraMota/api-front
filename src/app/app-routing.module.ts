import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Service } from '../app/app.service'
import { CommonModule } from '@angular/common';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule
  ],
  exports: [RouterModule],
  providers:[Service]
})
export class AppRoutingModule { }

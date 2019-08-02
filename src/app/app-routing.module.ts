import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchInfoComponent } from './search-info/search-info.component';

const routes : Routes = [
  {path : "" ,redirectTo : "/search", pathMatch : "full"},
  {path : "search", component  :SearchBarComponent},
  {path : "search/:companyName", component : SearchInfoComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

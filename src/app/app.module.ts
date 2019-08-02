import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StockService } from './stock.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchInfoComponent } from './search-info/search-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

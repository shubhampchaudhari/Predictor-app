import { Component, OnInit } from '@angular/core';
import { StockService } from 'app/stock.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private stockservice : StockService) { }


  ngOnInit() {
  }

}

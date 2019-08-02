import { Component, OnInit } from '@angular/core';
import { StockService } from 'app/stock.service';
import { StockValue } from 'app/search-bar/stock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent implements OnInit {

private currentCompanyStockValue : StockValue;
private pastCompanyYouSearch : StockValue[] = [];


  constructor(private stockservice : StockService, private route : ActivatedRoute ) { }

   getValues(){
   var company = this.route.snapshot.paramMap.get('companyName');
   return company;
   }

  ngOnInit() {

    this.getStockValue(this.getValues());

  }
  getStockValue (companyName) {
    this.currentCompanyStockValue = this.stockservice.getStockValue(companyName);
    this.currentCompanyStockValue.searchTime = (new Date()).toTimeString();

    const newStockValue : StockValue ={
      companyName : companyName,
      values : this.currentCompanyStockValue.values,
      searchTime: (new Date()).toTimeString()
    }
    this.pastCompanyYouSearch.push(newStockValue);
  }

}

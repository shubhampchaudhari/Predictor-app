import { Injectable } from '@angular/core';
import { StockValue } from './search-bar/stock';
import { STOCK } from './search-bar/stock-data';

@Injectable()
export class StockService {

  private StockValueData: StockValue [] = STOCK;

  constructor() { }

  getStockValue (companyName: String): StockValue{
  
    for(var i=0;i<this.StockValueData.length;i++)
    {
    
     if(this.StockValueData[i].companyName == companyName)
           return this.StockValueData[i];
    }
   }

}

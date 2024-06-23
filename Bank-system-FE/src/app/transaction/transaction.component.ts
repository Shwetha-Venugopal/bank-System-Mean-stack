import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  transactionList:any
  constructor(public coreService:CommonService){}

  ngOnInit(){
    this.coreService.getTrasaction().subscribe((dt:any)=>{
      this.transactionList=dt
    })
  }

}

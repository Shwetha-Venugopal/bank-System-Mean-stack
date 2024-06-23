import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  bankList:any
  displayDialoq:boolean=false
  listTrasaction:any
  transferForm:FormGroup
  constructor(public coreService:CommonService,public fb:FormBuilder, public messageService:MessageService){
    this.transferForm=this.fb.group({
      to:[],
      amount:[],
      from:[]
    })
  }
  ngOnInit(){
    this.getUserList()
  }

  transaction(product:any){
    this.transferForm.patchValue({
      from:product._id
    })
    this.listTrasaction=this.bankList.filter((el:any)=>el.name!==product.name)
    this.transferForm.patchValue(product)
    console.log(this.transferForm.value)
    this.displayDialoq=true
  }

  getUserList(){
    this.coreService.getBankUser().subscribe((data:any)=>{
      this.bankList=data
    })
  }

  onChangebankList(eve:any){
    console.log(eve)

  }

  transactionSubmit(){
    this.coreService.saveTransaction(this.transferForm.value).subscribe((dt:any)=>{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Saved Successfully' });
      this.displayDialoq=false
      this.getUserList()
    },(error:any)=>{
      this.messageService.add({ severity: 'error', summary: 'Failure', detail: error.message });
      this.displayDialoq=false
    })
  }

  cancelTransaction(){
    this.displayDialoq=false
  }

}

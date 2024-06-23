import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: CommonService,public messageService:MessageService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      accountNumber: ['', Validators.required],
      iifcNumber: ['', Validators.required],
      accoutBalance: [0, [Validators.required, Validators.min(0)]]
    });
  }


  saveRegister(){
    this.userService.saveRegister(this.registerForm.value).subscribe((data)=>{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Saved Successfully' });


    },(error)=>{
      this.messageService.add({ severity: 'error', summary: 'Failure', detail: error.error.message });
    })
  }

}

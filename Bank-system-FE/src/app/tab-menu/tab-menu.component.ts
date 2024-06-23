import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent {
  items:any
  constructor(public commonService:CommonService){}

  ngOnInit(){
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' ,routerLink:'home'},
      { label: 'Customers', icon: 'pi pi-fw pi-calendar',routerLink:'customer' },
      { label: 'Transaction', icon: 'pi pi-fw pi-pencil',routerLink:'transaction' },
      { label: 'Create Customer', icon: 'pi pi-fw pi-cog',routerLink:'create' }
    ];
  }

  logout(){
    this.commonService.logout()
  }

}

import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class.';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus : Menu[] = [
    new Menu("Users","/users/list","User list page"),
    new Menu("Vendors","/vendors/list","Vendor list page"),
    new Menu("Products","/products/list","Product list page")

    
  ];

  constructor(
    // private systemsrv: SystemService
  ) { }

  ngOnInit(): void {
  }

}

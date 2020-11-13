import { Component, OnInit } from '@angular/core';
import { VendorService} from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  tableStyle : string = "table table-sm";

  constructor(
    private vendorsrv: VendorService,
  ) { }

  ngOnInit(): void {
    this.vendorsrv.list().subscribe(
      res => { console.log(res);
      this.vendors = res as Vendor[]
      },
      err => { console.error(err);}

    )

  }

}

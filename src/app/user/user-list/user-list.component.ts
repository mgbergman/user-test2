import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string = "";
  sortCriteria: string = "lastName";
  tableStyle : string = "table table-sm";
  ascSequence: boolean = true;

  sortColumn(column: string): void {
    if (column == this.sortCriteria) {
      this.ascSequence = !this.ascSequence;
      return;
    }
    this.sortCriteria = column;
    this.ascSequence = true;
  }

  constructor(
    private userscv: UserService,
   

  ) { }

  ngOnInit(): void {
    this.userscv.list().subscribe(
      res => { console.log(res); 
      this.users= res as User[]
      },
      err => { console.error(err); }
    );


  }

}

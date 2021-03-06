import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-scrumboard-list',
  templateUrl: './scrumboard-list.component.html',
  styleUrls: ['./scrumboard-list.component.scss']
})
export class ScrumboardListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

//   OnAddButtonClick(){
// this.router.navigate(['/scrumboard-add'])
//   }
}

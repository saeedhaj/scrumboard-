import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrumboard-add',
  templateUrl: './scrumboard-add.component.html',
  styleUrls: ['./scrumboard-add.component.scss']
})
export class ScrumboardAddComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}

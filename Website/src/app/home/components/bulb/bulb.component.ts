import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent implements OnInit {
  bulb:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}

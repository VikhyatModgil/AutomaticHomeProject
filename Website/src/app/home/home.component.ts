import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  var1;
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme($e){
    const color = $e.detail.checked ? 'dark' : 'light';
    document.body.setAttribute('color-theme', color);
  }

}

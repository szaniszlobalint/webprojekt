import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigateByUrl('login');
  }

}

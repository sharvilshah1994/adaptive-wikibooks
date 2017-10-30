import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route;

  constructor(private router: Router) {
    this.route = router.routerState.snapshot.url;
  }

  ngOnInit() {
  }

}

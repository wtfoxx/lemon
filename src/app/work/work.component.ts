import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  toCase(): void {
    this.router.navigate(['case']);
  }
}

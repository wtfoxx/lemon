import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
}
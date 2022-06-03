import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lemon';

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
}

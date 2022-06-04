import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { fromEvent } from 'rxjs';

import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime,
} from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
}

enum Direction {
  Up = 'up',
  Down = 'down',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in')),
    ]),
  ],
})
export class HeaderComponent implements AfterViewInit {
  private isVisible = true;
  constructor(public router: Router) {}

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(50),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter((direction) => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter((direction) => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }

  public navigateToSection(section: string) {
    this.toHome();
    setTimeout(() => {
      window.location.hash = section;
    }, 100);
  }

  toHome(): void {
    this.router.navigate(['home']);
  }
}

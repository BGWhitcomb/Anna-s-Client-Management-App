import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event: Event) => {
        const navigationEnd = event as NavigationEnd;
        this.isHomePage = this.isRouteHomePage(navigationEnd.url);
      });
  }

  private isRouteHomePage(url: string): boolean {
    return url === '/' || url.startsWith('/home');
  }
}


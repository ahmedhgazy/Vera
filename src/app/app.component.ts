import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FormAreaComponent } from './components/form-area/form-area.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { DetailsComponent } from './pages/details/details.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewsLetterComponent } from './pages/news-letter/news-letter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViewportScroller } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    FormAreaComponent,
    NavComponent,
    ExpertiseComponent,
    SolutionsComponent,
    DetailsComponent,
    PricingComponent,
    ProjectsComponent,
    NewsLetterComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'vera';
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          // Use a timeout to ensure the element is rendered
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(tree.fragment);
          }, 0);
        }
      }
    });
  }
}

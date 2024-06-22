import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { SolutionsComponent } from '../solutions/solutions.component';
import { DetailsComponent } from '../details/details.component';
import { PricingComponent } from '../pricing/pricing.component';
import { NewsLetterComponent } from '../news-letter/news-letter.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FormAreaComponent } from '../../components/form-area/form-area.component';
import { PartnersComponent } from '../../components/parteners/parteners.component';
import { ExpertiseComponent } from '../expertise/expertise.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    RouterModule,
    HeaderComponent,
    PartnersComponent,
    FormAreaComponent,
    SolutionsComponent,
    DetailsComponent,
    PricingComponent,
    NewsLetterComponent,
    ProjectsComponent,
    ExpertiseComponent,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.router.navigate([], {
            relativeTo: this.route,
            fragment: sectionId,
            replaceUrl: true,
          });
        }
      });
    }, options);

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });
  }
}

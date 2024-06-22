import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewsLetterComponent } from './pages/news-letter/news-letter.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { HeaderComponent } from './shared/header/header.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        pathMatch: 'full',
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'news',
        component: NewsLetterComponent,
      },
      {
        path: 'pricing',
        component: PricingComponent,
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
      },
      {
        path: 'expertise',
        component: ExpertiseComponent,
      },
    ],
  },
];

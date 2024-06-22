import {
  Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [RouterModule],
})
export class NavComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.userScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.userScroll();
    }
  }

  userScroll(): void {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add(
          'bg-dark',
          'border-bottom',
          'border-secondary',
          'navbar-sticky'
        );
      } else {
        navbar.classList.remove(
          'bg-dark',
          'border-bottom',
          'border-secondary',
          'navbar-sticky'
        );
      }
    }
  }
}

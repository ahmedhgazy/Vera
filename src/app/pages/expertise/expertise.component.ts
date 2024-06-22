import { Component } from '@angular/core';
import { VideoModalComponent } from '../../components/video-modal/video-modal.component';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [VideoModalComponent],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
})
export class ExpertiseComponent {}

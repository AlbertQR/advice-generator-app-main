import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AdviceService } from '../../services/advice.service';

@Component({
  selector: 'app-advice',
  standalone: true,
  imports: [],
  templateUrl: './advice.component.html',
  styleUrl: './advice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdviceComponent implements OnInit {
  private adviceService = inject(AdviceService);
  advice = this.adviceService.computedAdvice;
  isLoading = this.adviceService.computedIsLoading;

  ngOnInit(): void {
    this.getNewAdvice();
  }

  getNewAdvice() {
    this.adviceService.getAdvice();
  }
}

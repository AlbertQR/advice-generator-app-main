import { computed, inject, Injectable, signal } from '@angular/core';
import { AdviceModel, EmptyAdvice } from '../models/advice.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private adviceApiUrl = 'https://api.adviceslip.com/advice';
  private http = inject(HttpClient);
  #advice = signal<AdviceModel>(EmptyAdvice);
  public computedAdvice = computed(() => this.#advice());
  #isLoading = signal<boolean>(true);
  public computedIsLoading = computed(() => this.#isLoading());

  getAdvice() {
    this.#isLoading.set(true);
    this.http.get<AdviceModel>(this.adviceApiUrl)
      .subscribe(data => {
        this.#advice.set(data);
        this.#isLoading.set(false)
      });
  }
}

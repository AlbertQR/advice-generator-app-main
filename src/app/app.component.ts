import { Component } from '@angular/core';
import { AdviceComponent } from './Advice/containers/advice/advice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <app-advice/>
    </main>`,
  imports: [
    AdviceComponent
  ]
})
export class AppComponent {

}

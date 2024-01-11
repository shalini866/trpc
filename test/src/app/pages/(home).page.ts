import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'test-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <test-analog-welcome /> `,
})
export default class HomeComponent {}

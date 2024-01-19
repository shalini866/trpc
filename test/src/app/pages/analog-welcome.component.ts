import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ApiClientService } from '@org/api-client';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'test-analog-welcome',
  standalone: true,
  imports: [AsyncPipe, FormsModule, NgFor, DatePipe, NgIf],
  providers:[ApiClientService],
  host: {
    class:
      'flex min-h-screen flex-col text-zinc-900 bg-zinc-50 px-4 pt-8 pb-32',
  },
  template: `
<div>{{ helloRes$ | async }}</div>

  `,
})
export class AnalogWelcomeComponent implements OnInit{
  helloRes$ = new BehaviorSubject('')


  constructor(private apiClientService:ApiClientService,
    private cd: ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.fetchData()
  }

  async fetchData(): Promise<void> {
    const res = await this.apiClientService.apiClient.hello.query();
    this.helloRes$.next(res);
    this.cd.detectChanges(); 
    console.log("res", res);
  }
  
}

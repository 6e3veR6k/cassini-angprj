import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedActs!: { dirCode: string; commission: number; realpayment: number }[];

  constructor() {
  }


  actsChangedHandler($event: { dirCode: string; commission: number; realpayment: number }[]) {
    this.selectedActs = $event;
  }
}

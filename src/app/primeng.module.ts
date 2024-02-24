import { NgModule } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    MultiSelectModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    ButtonModule
  ],
  exports: [
    MultiSelectModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    ButtonModule
  ],
})
export class PrimengModule {}

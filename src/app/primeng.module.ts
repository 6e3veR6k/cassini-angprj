import { NgModule } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    MultiSelectModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    DataViewModule,
    TagModule,
    CheckboxModule
  ],
  exports: [
    MultiSelectModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    DataViewModule,
    TagModule,
    CheckboxModule
  ],
})
export class PrimengModule {}

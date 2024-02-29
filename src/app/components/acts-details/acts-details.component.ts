import { Component, Input } from '@angular/core';
import xlsx, {IJsonSheet} from 'json-as-xlsx';

@Component({
  selector: 'app-acts-details',
  templateUrl: './acts-details.component.html',
  styleUrl: './acts-details.component.css'
})
export class ActsDetailsComponent {
  @Input() acts!: { dirCode: string; commission: number; realpayment: number }[];
  trackByDirection(index: number, act: { dirCode: string; commission: number; realpayment: number }) {
    return act.dirCode;
  }

  data = [
    {
      sheet: "Adults",
      columns: [
        { label: "User", value: "user" }, // Top level data
        { label: "Age", value: (row: {user: string, age: number, more: { phone: string}}) => row.age + " years" }, // Custom format
        { label: "Phone", value: (row: {user: string, age: number, more: { phone: string}}) => (row.more ? row.more.phone || "" : "") }, // Run functions
      ],
      content: [
        { user: "Andrea", age: 20, more: { phone: "11111111" } },
        { user: "Luis", age: 21, more: { phone: "12345678" } },
      ],
    }
  ];


  settings = {
    fileName: "MySpreadsheet", // Name of the resulting spreadsheet
    extraLength: 3, // A bigger number means that columns will be wider
    writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
    writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
    RTL: false, // Display the columns from right-to-left (the default value is false)
  }


  loadFile() {
    xlsx(this.data as IJsonSheet[], this.settings);
  }
}

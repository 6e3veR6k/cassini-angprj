import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParametersService } from '../../services/parameters.service';
import { AgentActStatus } from "../../models/agent-act-status.model";
import { AgentChanels } from "../../models/agent-chanels.model";
import { Branch } from "../../models/branch.model";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrl: './parameters.component.css'
})
export class ParametersComponent {
  public agentActStatuses: AgentActStatus[] = [];
  public agentChanels: AgentChanels[] = [];
  public agentsDirections: Branch[] = [];
  public period: Date = new Date();
  public dateFrom: Date = new Date();
  formGroup!: FormGroup;


  constructor(private parametersService: ParametersService) {}


  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedStatus: new FormControl(null, Validators.required),
      selectedPeriod: new FormControl(null, Validators.required),
      selectedApprovedDate: new FormControl(null, Validators.required),
      selectedChanels: new FormControl(null, Validators.required),
      selectedDirections: new FormControl(null, Validators.required)
    });

    this.getAgentActsStatuses();
    this.getAgentChanels();
    this.getAgentDirectoins();
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

  private getAgentActsStatuses() {
    this.parametersService.getActsStatuses()
    .subscribe(agentActsStatuses => {
        this.agentActStatuses = agentActsStatuses;
      });
  }


  private getAgentChanels() {
    this.parametersService.getAgentChanels()
      .subscribe(agentChanels => {
        this.agentChanels = agentChanels;
      });
  }


  private getAgentDirectoins() {
    this.parametersService.getDirections()
      .subscribe(agentDirectoins => {
        this.agentsDirections = agentDirectoins;
      });
  }
}

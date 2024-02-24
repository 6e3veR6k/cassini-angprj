import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParametersService } from '../../services/parameters.service';
import { AgentActStatus } from "../../models/agent-act-status.model";
import { AgentChanels } from "../../models/agent-chanels.model";
import { Branch } from "../../models/branch.model";
import { Validators } from '@angular/forms';
import { AgentsActsService } from '../../services/agents-acts.service';

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


  constructor(
    private parametersService: ParametersService,
    private agentsActsService: AgentsActsService
  ) {}


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

      this.parametersService.selectedAgentChanels.next(this.agentChanels.filter(ch => this.formGroup.value.selectedChanels.includes(ch.guid)));
      this.parametersService.selectedDirections.next(this.agentsDirections.filter(dr => this.formGroup.value.selectedDirections.includes(dr.guid)));
      this.agentsActsService.getAgentsActs();
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
        this.agentChanels = [...agentChanels].sort((a, b) => a.code - b.code);
      });
  }


  private getAgentDirectoins() {
    this.parametersService.getDirections()
      .subscribe(agentDirectoins => {
        this.agentsDirections = [...agentDirectoins].sort((a, b) => a.code > b.code ? 1 : -1);
      });
  }
}

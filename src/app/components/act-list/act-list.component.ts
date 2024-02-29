import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgentAct } from '../../models/agent-act.model';
import { AgentsActsService } from '../../services/agents-acts.service';
import { ParametersService } from '../../services/parameters.service';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-act-list',
  templateUrl: './act-list.component.html',
  styleUrl: './act-list.component.css'
})
export class ActListComponent implements OnInit {
  @Output() actsChanged = new EventEmitter<{dirCode: string, commission: number, realpayment: number}[]>();
  agentsActs: AgentAct[] = [];
  selectedChanels: string[] = [];
  selectedDirection: string[] = [];
  directions: Branch[] = [];

  constructor(
    private agentActService: AgentsActsService,
    private parametersService: ParametersService
  ) {
  }

  changeSelection() {
    this.agentsActs.forEach(act => act.Selected = !act.Selected);
    this.changeSelectedActs();
  }

  changeSelectedActs(): void {
    const selected = this.agentsActs.reduce<{dirCode: string, commission: number, realpayment: number}[]>((acc, cur) => {
      if(!cur.Selected) return acc;
      if(!acc.find(a => a.dirCode == cur.DirectionCode)) {
        acc.push({ dirCode: cur.DirectionCode, commission: cur.CommissionValue, realpayment: cur.RealPaymentValue })
        return acc;
      } else {
        const row = acc.find(a => a.dirCode === cur.DirectionCode);
        row!.realpayment += cur.RealPaymentValue;
        row!.commission += cur.CommissionValue;
        return acc;
      }
    }, [])

    selected.sort((a, b) => a.dirCode > b.dirCode ? 1 : -1 );
    this.actsChanged.emit(selected);
  }

  ngOnInit() {

    this.parametersService.selectedAgentChanels.subscribe(ch => this.selectedChanels = ch.map(c => String(c.code)));
    this.parametersService.selectedDirections.subscribe(d => this.selectedDirection = d.map(c => String(c.code)));

    this.parametersService.getDirections().subscribe(d => this.directions = d);

    this.agentActService.agentsActsByProgram.subscribe(agActByProgram => {
      agActByProgram.forEach(act => {
        if(!this.agentsActs.map(el => el.ActId).includes(act.ActId)) {
          this.agentsActs.push(new AgentAct(
            act.ActId,
            act.StartPeriod,
            act.ChanelGID,
            act.IdentificationCodeEDRPOU,
            act.AgentName,
            act.DocumentType,
            this.directions.find(dir => dir.guid === act.DirectionGid)!.code,
            act.RealPaymentValue,
            act.CommissionValue,
            act.CommissionTypeGID,
            act.StatusGID));
        } else {
          const agentAct = this.agentsActs.find(el => el.ActId === act.ActId);
          agentAct!.RealPaymentValue += act.RealPaymentValue;
          agentAct!.CommissionValue += act.CommissionValue;
        }
      })
    });

  }
}

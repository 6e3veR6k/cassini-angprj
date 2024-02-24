import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { AGENTS_ACTS_DATA } from '../models/mockup-data';
import { AgentAct, AgentActByProgram } from '../models/agent-act.model';


@Injectable({
  providedIn: 'root'
})
export class AgentsActsService {
  agentsActsByProgram: Subject<AgentActByProgram[]> = new Subject<AgentActByProgram[]>();

  constructor() { }

  getAgentsActs(): void {
    this.agentsActsByProgram.next(AGENTS_ACTS_DATA);
  }

}

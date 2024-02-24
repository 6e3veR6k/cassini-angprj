import { Injectable } from '@angular/core';
import { AgentActStatus } from '../models/agent-act-status.model';
import { Observable, of } from 'rxjs';
import { ACTS_STATUSES, AGENT_CHANELS, BRANCHES } from '../models/mockup-data';
import { AgentChanels } from '../models/agent-chanels.model';
import { Branch } from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  constructor() { }

  getActsStatuses(): Observable<AgentActStatus[]> {
    return of(ACTS_STATUSES);
  }

  getAgentChanels(): Observable<AgentChanels[]> {
    return of(AGENT_CHANELS);
  }

  getDirections(): Observable<Branch[]> {
    return of(BRANCHES);
  }
}

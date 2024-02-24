export class AgentActByProgram {
  public Selected?: boolean;

  constructor(
    public ActId: number,
    public StartPeriod: string,
    public ChanelGID: string,
    public IdentificationCodeEDRPOU: number,
    public AgentName: string,
    public DocumentType: string,
    public BranchCode: string,
    public DirectionGid: string,
    public ProgramCode: number,
    public RealPaymentValue: number,
    public CommissionValue: number,
    public CommissionTypeGID: string,
    public StatusGID: string
  ) {

  }
}


export class AgentAct {
  public Selected: boolean = false;

  constructor(
    public ActId: number,
    public StartPeriod: string,
    public ChanelGID: string,
    public IdentificationCodeEDRPOU: number,
    public AgentName: string,
    public DocumentType: string,
    public DirectionCode: string,
    public RealPaymentValue: number,
    public CommissionValue: number,
    public CommissionTypeGID: string,
    public StatusGID: string
  ) {

  }
}

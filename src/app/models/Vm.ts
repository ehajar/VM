export default class Vm {
    id: number;
    ipAddress: string;
    systemExploitation: string;
    etat: Boolean;
    
    constructor(id: number, ipAddress: string, systemExlpoitation: string, etat: Boolean) {
        this.id = id;
        this.ipAddress = ipAddress;
        this.systemExploitation = systemExlpoitation;
        this.etat = etat; 
      }

      static vide(){
        return new Vm(0,"","",false);
      }
}
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";


export class LibroVentas{
  IdEmpresa:      string = '';
  ComprobanteID:  string = '';
  FechaInicio:    NgbDateStruct;
  FechaFin:       NgbDateStruct;
  getParams(){
    return `IdEmpresa=${this.IdEmpresa}&ComprobanteID=${this.ComprobanteID}&FechaInicio=${this.fechaToString(this.FechaInicio) }&FechaFin=${this.fechaToString(this.FechaFin)}`;
  }
  fechaToString(date: NgbDateStruct): string // from internal model -> your mode
  {
    return date?date.year+"-"+('0'+date.month).slice(-2)
           +"-"+('0'+date.day).slice(-2):''
  }
}

import { VentasService } from './../../services/ventas/ventas.service';
import { LibroVentas } from './../../model/libro-ventas';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.sass']
})
export class LibroComponent implements OnInit {

  formLibro: LibroVentas = new LibroVentas();
  constructor(
    private calendar: NgbCalendar,
    private ventasService: VentasService
  ) { }

  ngOnInit(): void {
    this.formLibro.FechaInicio = this.calendar.getToday();
    this.formLibro.FechaFin = this.calendar.getToday();
  }

  async consultar(){
    console.log(await this.ventasService.obtenerVentas(this.formLibro).toPromise())
  }
}

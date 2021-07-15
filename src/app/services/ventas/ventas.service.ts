import { LibroVentas } from './../../model/libro-ventas';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private api: ApiService) { }

  obtenerVentas(libro: LibroVentas){
    return this.api.get("Listar/LibroDeVentas?"+libro.getParams())
  }
}

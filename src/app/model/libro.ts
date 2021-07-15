import { IVentas } from "./ventas";

export class Libro{
  direccion: string;
  nombreEmpresa: string;
  ruc: string;
  sumaIVa: number;
  sumaSubtotal: number;
  sumaTotal: number;
  titulo: string;
  viewLibroVentasDTOs: IVentas[];

  getVentasData(){
    let data = [];
    this.viewLibroVentasDTOs.forEach(venta => {
      const item = [
        venta.fecha,
        venta.comprobante,
        venta.serie,
        venta.cliente,
        venta.empId,
        venta.subtotal.toString(),
        venta.iva.toString(),
        venta.total.toString()
      ];
      data.push(item);
    })
    return data;
  }
}

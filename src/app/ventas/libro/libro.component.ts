import { VentasService } from './../../services/ventas/ventas.service';
import { LibroVentas } from './../../model/libro-ventas';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/model/libro';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.sass']
})
export class LibroComponent implements OnInit {

  formLibro: LibroVentas = new LibroVentas();
  libro: Libro;
  constructor(
    private calendar: NgbCalendar,
    private ventasService: VentasService
  ) { }

  ngOnInit(): void {
    this.formLibro.FechaInicio = this.calendar.getToday();
    this.formLibro.FechaFin = this.calendar.getToday();
    this.formLibro.FechaInicio = new NgbDate(2018,6,1);
    this.formLibro.FechaFin = new NgbDate(2018,6,30);
    this.formLibro.ComprobanteID = "1";
    this.formLibro.IdEmpresa = "LABPRIMS";
  }

  async consultar(){
    this.libro = await this.ventasService.obtenerVentas(this.formLibro).toPromise();
    console.log(this.libro);
  }
  async descargar(){
    /*
    let PDF = new jsPDF('p', 'mm', 'a4');

    let DATA = document.getElementById('contenedor');
    console.log(DATA.innerHTML)
    await PDF.html(DATA.innerHTML, {

    })

    PDF.save(`LibroVentas`);
    */
    var pdf = new jsPDF('p', 'mm', 'a4');

    /*
		await pdf.html(document.body, {
			callback: function (pdf) {
				let DATA = document.getElementById('contenedor');
				//iframe.setAttribute('style', 'position:absolute;top:0;right:0;height:100%; width:600px');
				document.body.appendChild(DATA);
			},
		});
    */
    //let data = this.libro.getVentasData();
    pdf.text(this.libro.titulo, 15, 15, {});
    //pdf.text(`Empresa:    ${this.libro.nombreEmpresa}`, 15, 30, {});
    //pdf.text(`RUC:        ${this.libro.ruc}`, 15, 45, {});
    //pdf.text(`Dirección:  ${this.libro.nombreEmpresa}`, 15, 60, {});
    autoTable(pdf,
      {
        html: '#tCabecera',
        startY: 30
      }
    )
    autoTable(pdf,
      {
        html: '#totales',
        startY: 60
      }
    )
    autoTable(pdf,
      {
        html: '#my-table' ,
        styles:
        {
          fontSize: 8,
        },
        startY: 90
      }
    )
    pdf.save(`LibroVentas`);

    /*
    html2canvas(DATA).then(canvas => {

        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

        PDF.save('angular-demo.pdf');
    });
    */
  }
}

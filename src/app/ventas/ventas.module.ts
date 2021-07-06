import { UtilModule } from './../util/util/util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroComponent } from './libro/libro.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbDateAdapter, NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';
import { NgbDateNativeUTCAdapter, NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: '',
    component: LibroComponent
  }
];


@NgModule({
  declarations: [
    LibroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilModule,
    FormsModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class VentasModule { }

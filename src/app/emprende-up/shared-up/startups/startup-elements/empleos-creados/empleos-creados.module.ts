import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosCorrientesComponent } from './empleados-corrientes/empleados-corrientes.component';
import { EmpleadosFundadoresComponent } from './empleados-fundadores/empleados-fundadores.component';
import { EmpleadosFreelancersComponent } from './empleados-freelancers/empleados-freelancers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmpleadosCorrientesComponent, EmpleadosFundadoresComponent, EmpleadosFreelancersComponent]
})
export class EmpleosCreadosModule { }

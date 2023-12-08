import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { InvoiceComponent } from './features/invoice/invoice.component';

const routes: Routes = [
  {path: 'login',
  component: LoginComponent
  },
  {path: 'admin/invoice',
   component: InvoiceComponent
  }
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

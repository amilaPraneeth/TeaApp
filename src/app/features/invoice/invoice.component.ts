import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InvoiceService } from './services/invoice.service';
import { LoginResponse } from '../auth/model/login-response.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

module? : LoginResponse;
  
  constructor(private invoiceService: InvoiceService,private cookeServices: CookieService,
    private router: Router, private http : HttpClient ){}
  
 
  
  
    ngOnInit(): void {
      this.invoiceService.getAllInvoices().subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error('Error:', error);
          // Handle error appropriately, e.g., show a user-friendly message
        }
      );
    }
    

  
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { InvoiceList } from '../model/invoice.model';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
    


  constructor(private http: HttpClient, private cookiesService: CookieService) { }

  
  
getAllInvoices():Observable<InvoiceList[]>{

  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  

  // return this.http.get<InvoiceList[]>(`https://smartauctionstg.okloapps.com/api/SellerItems/get-invoice-items-by-criteria?addAuth=true`,{ 'headers': headers })
  // .pipe(
  //   catchError(this.handleError)
  // );

  return this.http.get<InvoiceList[]>(`https://smartauctionstg.okloapps.com/api/SellerItems/get-invoice-items-by-criteria?addAuth=true`,{ 'headers': headers })
  .pipe(retry(2),
  catchError(this.handleError)
  
  );
}

private handleError(error:any):Observable<never>{
  console.error("an error ocured", error)
  return throwError('something went wrong please try again latter')
}



// getAllInvoices(){

//   const headers= new HttpHeaders()
//   .set('content-type', 'application/json')
//   .set('Access-Control-Allow-Origin', '*')
  

//   return this.http.get(`https://reqres.in/api/users?page=2`,{ 'headers': headers })
//   .pipe(
//     catchError(this.handleError)
//   );
// }

// private handleError(error:any):Observable<never>{
//   console.error("an error ocured", error)
//   return throwError('something went wrong please try again latter')
// }















// createInvoice(invoiceData: any): Observable<any> {
//   // Adjust the URL and data as per your API requirements
//   const url = 'https://smartauctionstg.okloapps.com/api/SellerItems/get-invoice-items-by-criteria?addAuth=true';
//   return this.http.post(url, invoiceData)
//     .pipe(
//       catchError(this.handleError)
//     );
// }

// private handleError(error: any): Observable<never> {
//   console.error('An error occurred:', error);
//   return throwError('Something went wrong. Please try again later.');
// }
// }


}








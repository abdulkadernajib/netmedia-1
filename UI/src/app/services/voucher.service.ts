import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  private debtorUrl = '/api/debtor'
  private creditorUrl = '/api/creditor'



  constructor(private http: HttpClient) { }

  public getCities(state): Observable<any> {
    return this.http.get('/api/city/' + state)
  }
  public getStates(): Observable<any> {
    return this.http.get('/api/state')
  }


  public addDebtor(debtor: any) {
    return this.http.post(this.debtorUrl, debtor);
  }
  public addCreditor(creditor: any) {
    return this.http.post(this.creditorUrl, creditor);
  }


  public getDebtor(): Observable<any> {
    return this.http.get(`${this.debtorUrl}/all`);
  }
  public getCreditor(): Observable<any> {
    return this.http.get(`${this.creditorUrl}/all`);
  }
  public getDebtorByID(_id: any): Observable<any> {
    return this.http.get(this.debtorUrl + '/' + _id);
  }
  public getCreditorByID(_id: any): Observable<any> {
    return this.http.get(this.creditorUrl + '/' + _id);
  }

  public updateDebtor(_id: any, debtor) {
    return this.http.put(this.debtorUrl + '/' + _id, debtor);
  }

  public deleteDebtor(_id: any) {
    return this.http.delete(this.debtorUrl + '/' + _id);
  }

  public updateCreditor(_id: any, creditor) {
    return this.http.put(this.creditorUrl + '/' + _id, creditor);
  }

  public deleteCreditor(_id: any) {
    return this.http.delete(this.creditorUrl + '/' + _id);
  }
}

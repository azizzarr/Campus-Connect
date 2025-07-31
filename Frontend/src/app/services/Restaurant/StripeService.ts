import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routes } from 'src/app/shared/service/routes/routes';
import { Subject, Observable,BehaviorSubject,map } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private stripeApiUrl = 'http://localhost:8097/FactureR';

  constructor(private httpClient: HttpClient
    ) { }

  pay(factureId: number): Observable<any> {
    const url = `${this.stripeApiUrl}/pay/${factureId}`;
    return this.httpClient.post(url, null);
  }

  getQRCode(id: number) {
    return this.httpClient.get('http://localhost:8083/genrateQRCode/' + id);
  }

}



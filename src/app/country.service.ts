import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = 'https://api.worldbank.org/v2/country';
  endUrl = 'per_page=1000&format=json'; // añadir antes del parametro comun "?"
  countryList: any[];

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return(this.http.get<any[]>(this.url + '?' + this.endUrl)
    .pipe(map(data => (data[1])))

    );

  }
}

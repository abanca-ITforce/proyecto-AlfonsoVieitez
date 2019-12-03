import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countryList$: Observable<any[]>;

  constructor(private countryService: CountryService) {
    this.countryList$ = this.countryService.getAllCountries$(); // llamamos a la funcion observable
   }

  ngOnInit() {
  }

}

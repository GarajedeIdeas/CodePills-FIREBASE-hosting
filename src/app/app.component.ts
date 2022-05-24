import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: any[];

  constructor(private http: HttpClient) {
    this.products = [];

    this.http.get<any>('https://peticiones.online/api/products')
      .subscribe(response => {
        this.products = response.results;
      })
  }

}

import { Component }          from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'my-app',
  template: `<h1>123 </h1>`,
  providers:[ProductService]
})
export class AppComponent {
  title = 'Tour of Heroes';
    constructor(private productservice: ProductService) {}
  profile = {};

  ngOnInit() {
    this.productservice.getproducts().subscribe(data => this.profile = data);
  }
}
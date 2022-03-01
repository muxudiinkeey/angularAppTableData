
 # <p>Sameeyso product-list-component</p>

```javascript
 import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {}
```
---
```html
<p>marka hore get and set function samayso</p>
```
```javascript 
private _listFilter: string = '';

  get listFilter(): string{

   return  this._listFilter

  }
```
___
products Arrey data json ah samee
shaandheentaProducts Arrey eber ah samee
interface Iproducts Arrey ahna hore aytuu 
kuugu diyaarsanaa ogow.
___
```javascript
shaandheentaProducts: IProduct []= [];

  Products: IProduct []= [

    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
  ]
  ``


import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;


  private _listFilter: string = '';

  get listFilter(): string {

    return this._listFilter

  }

  set listFilter(value: string) {

    this._listFilter = value;

    console.log('waa value : ', value)
    this.shaandheentaProducts = this.shaandheeFilter(value)
  }




  shaandheentaProducts: IProduct[] = [];



  Products: IProduct []= []
    private _productService: any;

  constructor(private productService: ProductService) {
    this._productService = productService;
   }


  shaandheeFilter(shaandheesan: string): IProduct[] {

    shaandheesan = shaandheesan.toLowerCase();

    return this.Products.filter((product: IProduct) =>

      product.productName.toLowerCase().includes(shaandheesan)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.Products = this.productService.getProduct();
    this.shaandheentaProducts = this.Products
    



  }

  onRatingClicked(message: string): void {
    this.title = 'productlist list :' + message;
  }
}

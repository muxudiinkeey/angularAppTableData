import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
  
    SharedModule
  ]
})
export class ProductModule { }

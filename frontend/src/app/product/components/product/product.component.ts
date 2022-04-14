import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductFormComponent } from './product-form.component';
import { ProductService } from '../../services/product.service';
import { actions } from '../../../libs/constants/route-constants';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  template: `
    <div class="product">
      <app-product-list
        [products]="products"
        (productAction)="onProductAction($event)"></app-product-list>
    </div>
  `,
  styles: [
    `
      .product {
        display: block;
        height: 100% !important;
        overflow-y: show;
      }
    `
  ]
})
export class ProductComponent implements OnInit {
  initProduct = {
    name: '',
    mainImage: '',
    description: '',
    brand: 'draft',

  }

  products: any[] = [];
  product: any = {};

  constructor(
    public dialog: MatDialog,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: res => {
        console.log(res)
        this.products = res;
      }
    });
  }

  openDialog (isEditMode: boolean = false): void {
    const productData = isEditMode ? this.product : this.initProduct;
    
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '90%',
      height: '90%',
      data: productData
    });


    dialogRef.afterClosed()
      .subscribe((result) => {
         
        if (typeof result === 'object') {
            const list = this.products;

            if (isEditMode) {
              this.productService.update(result, result.key.id)
                .subscribe({
                  next: (res) => {
                  console.log({res})
                  const selected = list.find((obj: any) => obj.key.id ===  res.key.id);
                  list[list.indexOf(selected)] = res;
                  this.products = [...list];
                }
              });
            } else {
              this.productService.save(result)
                .subscribe({
                  next: (res) => {
                  list.push(res);
                  this.products = [...list];
                }
              });
            }


          }
      });
  }

  onProductAction(event: any) {
    console.log(event);
    switch (event.action) {
      case actions.CREATE:
        this.openDialog();
        break;
      case actions.UPDATE:
        this.product = this.products.find((obj) => obj.key.id ===  event.id);
        this.openDialog(true);
        break;
      case actions.DELETE:
        this.productService.delete(event.id).subscribe({
            next: res => {
              const products = this.products.filter((obj) => obj.key.id !==  event.id)
              this.products = products;
            }
        })
        break;

      default:
        break;
    }
  }


}

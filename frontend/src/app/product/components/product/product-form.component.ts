import { Component, OnInit, Inject, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  brand: string;
  description: string;
  status: string;
  parentCategories: any[];
}


@Component({
  selector: 'app-product-form',
  template: `
  <div class="dialog-content">
  <h4 mat-dialog-title>Product Form</h4>

    <div mat-dialog-content class="dialog-content">
  <div class="form">
      <div class="form-row">
        <div>
          <mat-form-field appearance="outline">
           <mat-label>Name</mat-label>
           <input matInput placeholder="Placeholder" [(ngModel)]="data.name" >
          </mat-form-field>
        </div>
        <div>
          <mat-form-field appearance="outline">
           <mat-label>Brand</mat-label>
           <input matInput placeholder="Placeholder" [(ngModel)]="data.brand" >
          </mat-form-field>
      </div>


      </div>
      <div>
      <div class="form-row">
      
    <div>
        upload image
      </div>
      </div>

      <div>
        <mat-form-field appearance="outline">
         <mat-label>Description</mat-label>
         <textarea matInput [(ngModel)]="data.description" rows="5"></textarea>
        </mat-form-field>
      </div>
      </div>

        <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()" class="paps-btn-default">Cancel</button>
        <button mat-button [mat-dialog-close]="data" cdkFocusInitial class="th-btn-primary">Submit</button>
        </div>


  </div>


    </div>

  `,
  styles: [
    `
      .mat-dialog-container{
         min-height: 450px;
       }
    `
  ]
})
export class ProductFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}

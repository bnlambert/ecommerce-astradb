import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoryFormComponent } from './category-form.component';
import { CategoryService } from '../../services/category.service';
import { actions } from '../../../libs/constants/route-constants';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { MAIN_PARENT_ID } from '../../utils/constants';

@Component({
  selector: 'app-category',
  template: `
    <div class="category">
      <app-category-list
        [categories]="categories"
        (categoryAction)="onCategoryAction($event)"></app-category-list>
    </div>
  `,
  styles: [
    `
      .category {
        display: block;
        height: 100% !important;
        overflow-y: show;
      }
    `
  ]
})
export class CategoryComponent implements OnInit {
 
  initCategory = {
    key: {},
    name: '',
    parentId: '',
    description: '',
    parentCategories: []
  }

  categories: any[] = [];
  category: any = {};
  mainCategory = {
    key: {  id: MAIN_PARENT_ID },
    name: "Select Parent Category"
  };

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: res => {
        console.log(res)
        this.categories = res;
      }
    });
  }

  openDialog (isEditMode: boolean = false): void {
    this.initCategory.key = this.mainCategory.key;
    const categoryData = isEditMode ? this.category : this.initCategory;
    categoryData.id = categoryData.key.id || null;
    const mainCategories = isEditMode ?
      this.categories.filter((obj) => obj.key.id != categoryData.key.id) :
      this.categories;
    const dialogRef = this.dialog.open(CategoryFormComponent, {
      width: '90%',
      height: '90%',
      data: { ...categoryData, parentCategories: [this.mainCategory, ...mainCategories] }
    });


    dialogRef.afterClosed()
      .subscribe((result) => {
         console.log(result);
         
        if (typeof result === 'object') {
            delete result['id'];
            delete result['parentCategories'];
            const list = this.categories;

            if (isEditMode) {
              this.categoryService.update(result, result.key.id)
                .subscribe((res) => {
                  const selected = list.find((obj: any) => obj.key.id ===  res.key.id);
                  list[list.indexOf(selected)] = res;
                  this.categories = [...list];
                });
            } else {
              this.categoryService.save(result)
                .subscribe((res) => {
                  list.push(res);
                  this.categories = [...list];
                });
            }


          }
      });
  }

  onCategoryAction(event: any) {
    switch (event.action) {
      case actions.CREATE:
        this.openDialog();
        break;
      case actions.UPDATE:
        this.category = this.categories.find((obj) => obj.key.id ===  event.id);
        this.openDialog(true);
        break;
      case actions.DELETE:
        this.categoryService.delete(event.id).subscribe(
            res => {
              const categories = this.categories.filter((obj) => obj.key.id !==  event.id)
              this.categories = categories;
            }
          )
        break;

      default:
        break;
    }
  }


}

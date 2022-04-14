import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { actions } from '../../../libs/constants/route-constants';

@Component({
  selector: 'app-category-list',
  template: `
    <div>
      
      

      <div class="title-pane">
        <div>
          <h3>Categories</h3>
        </div>
        <div></div>
        <div>
          <button mat-button (click)="onClick(actions.CREATE)" class="th-btn-primary">Add a Category</button>
        </div>
      </div>

      <div class="list">
        <div
          *ngFor="let p of parents">
          <div class="item">
            <div
              class="title">{{p['name']}}</div>
            <div class="actions">
              <mat-icon
                (click)="onSelect(actions.DELETE, p['key']['id'])"
                aria-hidden="false"
                aria-label="Delete icon"
                class="danger button-icon">delete</mat-icon>
              <mat-icon
              (click)="onSelect(actions.UPDATE, p['key']['id'])"
              aria-hidden="false"
              aria-label="Edit icon"
              class="info button-icon">edit</mat-icon>
            </div>
          </div>
          <div
            *ngFor="let c of children[p['key']['id']]"
            class="item">
              <div
                class="title"> ~ {{c.name}}</div>
              <div class="actions">
                <mat-icon
                  (click)="onSelect(actions.DELETE, c.key.id)"
                  aria-hidden="false"
                  aria-label="Delete icon"
                  class="danger button-icon">delete</mat-icon>
                <mat-icon
                (click)="onSelect(actions.UPDATE, c.key.id)"
                aria-hidden="false"
                aria-label="Edit icon"
                class="info button-icon">edit</mat-icon>
              </div>
            </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list {
      width: 100%;
    }
    .item {
      display: flex;
      flex-direction: row;
      margin-bottom: 5px;
      width: 100%;
      border-bottom: solid 1px #eee;

    }
    .item:hover {
      box-shadow: 2px 2px 4px #ccc;
    }
    .title, .actions{
      padding: 10px 5px 5px 5px;
    }
    .title {
      flex-grow: 1;
    }
    `]
})
export class CategoryListComponent implements OnInit, OnChanges {
  @Input() categories: any[] = [];
  @Output() categoryAction: any = new EventEmitter<any>();
  actions = actions;
  parents = [];
  children: any[] = [];
  mainCategories = [];


  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['categories']) {
      console.log({ changes })
      const list = changes['categories'].currentValue;
      const children: any = {};
      this.parents = list.filter((obj: any) => obj.parentId === "3e2fff11-9f6a-4f0c-979f-883a76cfa598");
      this.parents.map((obj: any) => {
        children[obj.key.id] = list.filter((ob: any) => ob.parentId === obj.key.id);
      });

      this.children = children;
    }
  }


  onClick(action: string) {
    this.categoryAction.emit({action});
  }

  onSelect(action: any, id: any) {
    this.categoryAction.emit({action, id});
  }

}

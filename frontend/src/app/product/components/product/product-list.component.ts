import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { actions } from '../../../libs/constants/route-constants';

@Component({
  selector: 'app-product-list',
  template: `
    <div>
      
      

      <div class="title-pane">
        <div>
          <h3>Products</h3>
        </div>
        <div></div>
        <div>
          <button mat-button (click)="onClick(actions.CREATE)" class="th-btn-primary">Add a Product</button>
        </div>
      </div>

      <div class="list">
        <div
          *ngFor="let p of items">
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
export class ProductListComponent implements OnInit, OnChanges {
  @Input() products: any[] = [];
  @Output() productAction: any = new EventEmitter<any>();
  actions = actions;
  items: any[] = [];


  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['products']) {
      console.log({ changes })
      this.items = changes['products'].currentValue;
    }
  }


  onClick(action: string) {
    this.productAction.emit({action});
  }

  onSelect(action: any, id: any) {
    this.productAction.emit({action, id});
  }

}

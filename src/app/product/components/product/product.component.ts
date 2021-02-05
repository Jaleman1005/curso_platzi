import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './Product.component.html',
    styleUrls: ['./Product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('consturctor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    ngOnInit() {
        console.log('onInit');
    }

    addCart() {
        this.productClicked.emit(this.product.id);
    }
}

import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Product } from "../../models/product";

@Component({
    selector: "product",
    templateUrl: "./app/components/product/product.component.html"
})
export class ProductComponent {

    @Input() data: Product;
    @Output() buttonShowDetailsClicked: EventEmitter<Product> = new EventEmitter<Product>();

    showDetails() {
        console.log("testClick");
        this.buttonShowDetailsClicked.emit(this.data);
    }
}

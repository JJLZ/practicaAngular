import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Product } from "../models/product";
import { ProductService } from "./product.service";
import { ProductFilter } from "../models/product-filter";

@Injectable()
export class SoldProductsResolve implements Resolve<Product[]> {

    constructor(private _productService: ProductService) { }

    resolve(ruta: ActivatedRouteSnapshot): Observable<Product[]> {

        let filter: ProductFilter = { state: "sold" };

        return this._productService.getProducts(filter);
    }
}

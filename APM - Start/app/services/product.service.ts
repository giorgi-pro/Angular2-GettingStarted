import { Injectable } from 'angular2/core'
import { IProduct } from '../products/product'
import { Http, Response } from 'angular2/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProductService {

    private _productUrl: string = 'api/products/products.json';

    constructor(private _http: Http) {  }

    getProducts(): Observable<IProduct[]> {

        var result = this._http.get(this._productUrl)
                         .map((response: Response) => <IProduct[]>response.json())
                         .do(data => console.dir(JSON.stringify(data)))
                         .catch(this.handleProductRetrieval);
        
        return result;
    }

    private handleProductRetrieval(error: Response): Observable<any> {

        console.dir(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}
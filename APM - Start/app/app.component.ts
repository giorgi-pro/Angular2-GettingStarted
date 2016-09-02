import { Component } from 'angular2/core'
import { HTTP_PROVIDERS } from 'angular2/http'
import { ROUTER_PROVIDERS, RouteConfig } from 'angular2/router'
import 'rxjs/Rx'
import { ProductListComponent } from './products/product-list.component'
import { ProductService } from './services/product.service'
import { WelcomeComponent } from './home/welcome.component'

@Component({

    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
    `,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([{

    path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true
}, {
    
    path: '/products', name: 'products', component: ProductListComponent
}])
export class AppComponent {

    pageTitle: string = 'Acme product management';
}
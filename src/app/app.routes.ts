import { Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AllProductsPageComponent } from './pages/all-products-page/all-products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AllSalesPageComponent } from './pages/all-sales-page/all-sales-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'categories',
        component: CategoriesPageComponent,
        title: 'Categories'
    },
    {
        path: 'products',
        component: AllProductsPageComponent,
        title: 'Products'
    },
    {
        path: 'product/:id',
        component: ProductPageComponent,
        title: 'Product'
    },
    {
        path: 'cart',
        component: CartPageComponent,
        title: 'Cart'
    },
    {
        path: 'sales',
        component: AllSalesPageComponent,
        title: 'Sales'
    },
    {
        path: '**',
        component: ErrorPageComponent,
        title: 'Error-404'
    },
];

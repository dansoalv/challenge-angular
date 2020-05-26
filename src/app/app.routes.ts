import { RouterModule, Routes} from '@angular/router';
import {BisiComponent} from './bisi/bisi.component';
import {InstructorsComponent} from './instructors/instructors.component';
import {AppComponent} from './app.component';
import {CartComponent} from './cart/cart.component';

const appRoutes: Routes = [
  {path: 'bisi', component: BisiComponent},
  {path: 'instructors', component: InstructorsComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: BisiComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: false});

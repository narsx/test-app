import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
   // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
   component: HomePage
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  }, 
  {
    path: 'productos',
    component: ProductosComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

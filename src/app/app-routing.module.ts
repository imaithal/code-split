import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

class Throttle {
  resolve() {
    return new Promise(resolve => setTimeout(resolve, 20000));
  }
}

const routes: Routes = 
[
	{
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
     },
	{ 
		path: 'nyan', loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule) ,
		resolve: {
          Throttle
        }
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Throttle],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: MovieDetailsComponent,
    path: 'details/:id',
  },
  {
    component: AboutComponent,
    path: 'About',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

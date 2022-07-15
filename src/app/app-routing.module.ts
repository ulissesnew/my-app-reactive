import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { ContactComponent } from './core/forms/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'filtro-reativo',
    loadChildren: () => import('./pages/filtro-reativo/filtro-reativo.module').then(m => m.FiltroReativoModule),
    data: {
      title: "Filtro Reativo"
    }
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule),
    canLoad: [AuthGuard],
    data: {
      title: "Posts"
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: "Contato"
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: "404"
    }
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

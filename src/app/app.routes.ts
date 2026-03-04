import { Routes } from '@angular/router';
import { UserDetail } from './pages/user-detail/user-detail';
import { UsersList } from './pages/users-list/users-list';

export const routes: Routes = [

  { path: 'users', component: UsersList },

  { path: 'users/:id', component: UserDetail },

  { path: '', redirectTo: 'users', pathMatch: 'full' },

  { path: '**', redirectTo: 'users' }

];
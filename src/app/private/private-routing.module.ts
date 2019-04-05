import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UpcomingComponent } from './my-bookings/upcoming/upcoming.component';
import {PastComponent } from './my-bookings/past/past.component';

const routes: Routes = [

  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'my-bookings',
        component: MyBookingsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  },{
    path: 'my-bookings',
    //redirectTo : 'my-bookings/upcoming',
    component: MyBookingsComponent,
    canActivate:[AuthGuard],
    children: [
      //  {
      //   path : '',
      //   redirectTo : 'my-bookings',
      //   pathMatch : 'full'
      // },
      {
        path: 'upcoming',
        component: UpcomingComponent,
      },
      {
        path: 'past',
        component: PastComponent,
      }
    ]
  },

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { } 

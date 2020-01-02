import { Routes } from '@angular/router'
import { CreateEventComponent } from './app/events/event-details/create-event.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventListComponent } from './app/events/event-list.component';
import { EventRouteActivator } from './app/events/event-details/event-route.activator.service';
import { EventListResolver } from './app/events/shared/events-list-resolver.service';
import { Error404Component } from './app/errors/404.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },   
    { path: '404', component: Error404Component }, 
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './app/user/user.module#UserModule' }
]
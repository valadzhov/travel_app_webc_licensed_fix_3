import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import { routes as homeRoute } from './home/home-routing';
import './in-app/in-app';
import { routes as inAppRoute } from './in-app/in-app-routing';

export const routes: Route[] = [
  { path: '', component: 'app-home', name: 'Home', children: homeRoute },
  { path: 'home', component: 'app-home', name: 'Home', children: homeRoute },
  { path: 'in-app', component: 'app-in-app', name: 'In-App', children: inAppRoute },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
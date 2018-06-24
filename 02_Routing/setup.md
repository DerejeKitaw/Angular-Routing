# Install routes
app.module.ts
```ts
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', redirectTo: 'home' },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(routes), // <-- will make router-outlet directive available to our template.
    // RouterModule.forRoot(routes) is a function that will take our routes, configure the router, and 
    // return a list of dependencies like RouteRegistry, Location, and several other classes that are 
    // necessary to make routing work. In our providers we have this:

  ],
  providers: [
  // for "hash-bang" routing Eg. http://localhost:3300/#/home
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
# Define routes
> - path specifies the URL this route will handle. <br>
> - component is what ties a given route path to a component that will handle the route. <br>
> - the optional redirectTo is used to redirect a given path to an `existing route`. <br>
app.component.html
```html
<div class="navLinks">
  <a [routerLink]="['/home']">Home</a>
</div>

<router-outlet></router-outlet>
```
app.component.ts
```ts
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  };
}
```
# Define base url (3 ways)
1. index.html
```html
<base href="/">
```
2. app.module
```ts
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(routes), // <-- will make router-outlet directive available to our template.
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' } // <--- this right here 
    // Putting { provide: APP_BASE_HREF, useValue: '/' } in the providers is the equivalent 
    // of using <base href="/"> on our application HTML header.

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
3. When deploying to production we can also set the value of the base-href by using the --base-href command-line option

# To retrieve the parameter for a given route (
1. Import `ActivateRoute` where you need to retrive parameters Eg. ProductComponent
2. Inject `ActivatedRoute` into the constructor of our component.
3. Define route
app.module.ts
```ts
const routes: Routes = [
{ path: 'about/:id', component: AboutComponent }
];
```
product.component.ts
```ts
import { ActivatedRoute } from '@angular/router';
  id: string;
constructor(private route: ActivatedRoute) {
  route.params.subscribe(params => { this.id = params['id']; });
}
```
product.component.html
```html
{{id}}  // will retrive the id from the url
```

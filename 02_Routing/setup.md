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
  ],
  providers: [],
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

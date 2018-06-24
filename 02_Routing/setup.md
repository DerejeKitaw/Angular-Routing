# Import constants from the @angular/router package 
```ts
import { RouterModule, Routes } from '@angular/router';
```
# Install routes
```ts
RouterModule.forRoot(routes), // <-- will make router-outlet directive available to our template.
```
# Define routes
> - path specifies the URL this route will handle. <br>
> - component is what ties a given route path to a component that will handle the route. <br>
> - the optional redirectTo is used to redirect a given path to an `existing route`. <br>
```ts

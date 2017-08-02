# Angular-Routing

# Seting up Routing
    ## Define a base path.

        www.dkitaw.com/project/
        `project` is the base path

    ## Import the Angular router 

    ## Configure the routes to define which route path activates which component.

    ## Identify where to place the activated component's template.

    ## Activate routes to navigate based on user actions. 







    ## Define a base path.

        www.dkitaw.com/project/ -- in this url `project` is the base path

        This base path is:
            used by the router when building a URL for navigation. 
        
            The router uses this base path to compose the URL and locate the `component`, `template`, and `module` files. 
        
            used by the browser to `prefix` relative URLs when `downloading` and `linking` to 
                scripts, 
                images, and 
                stylesheets. 
            The base path is set at the top of the index.html file using a base element.
                `<base href="/">`
                    for development we use base element to:
                        `<base href="/">` so we have base url http://localhost:3000
                    If the application is deployed in a sub folder eg. www.dkitaw.com/project/ the base path must be set to 
                        `<base href="/project/">`
                    
                    `Changing base url from development to production can be done :
                        1. manualy
                        2. using a task runner
                        3. use Angular CLI :- 
                            ng build --base-href /project/
                            or
                            ng build --bh /project/

## Import the Angular router

    The Angular router is in an `external` Angular module called RouterModule. 
    
    The RouterModule provides the router 
        
        service: to manage navigation and URL manipulation.

        configuration: for configuring our routes, and directives for activating and displaying routes. 
        
        The RouterLink directive ties a clickable HTML element to a route path. 
        
        When a user clicks on the element, the route is activated, and the associated component's template is displayed.

        RouterLinkActive: associates a style with the active RouterLink. 

        RouterOutlet: defines where to display the template.

        provides two methods-- forRoot and forChild. 
        
        RouterModule.forRoot:

            declares the router directives, 
            
            manages our route configuration, and 
            
            registers the router service. 
            
            We use it only once in an application normally when defining the basic application routes.

            only one router service is registered.

        RouterModule.forChild 
            declares the router directives and 
            
            manages our route configuration, but 
            
            it does not register the router service again.

            can be used in every feature module.

    # 1st
        `import { RouterModule } from '@angular/router';`
    ...
    # 2nd
        `@NgModule({
            imports: [
                RouterModule.forRoot[()]
            ]
        })`
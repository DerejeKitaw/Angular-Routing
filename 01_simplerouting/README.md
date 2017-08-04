## Create new angular project

    `ng n simplerouting --routing`

## Create Home component

    `ng g c home`
## Configur routing

    `path: 'home', component: HomeComponent ,`

    check : http://localhost:4200/home should display home works

    # The above steps are saved in simpleroutinginside
        `git branch simpleroutinginside`
        `git checkout simpleroutinginside`
        `git push --set-upstream origin simpleroutinginside`

# Create components 

    `communityComponent`
        `ng g c community` --dry
    
    `housing`
        `ng g c housing`
    
    `personal`
        `ng g c personal`
    
    `forSale`
        `ng g c forSale`
    
    `jobs`
        `ng g c jobs`
    
    `services`
        `ng g c services`
    
    `resumes`
        `ng g c resumes`

# Create navigation components 
    `ng g c core/nav`
        `git branch createcomponents`
        `git checkout createcomponents`
        `git push --set-upstream origin createcomponents`

        rename createcomponents to 02_createcomponents

        git branch -m createcomponents 02_createcomponents

        If you want to rename a branch while pointed to any branch, do: `git branch -m <oldname> <newname>`

        git push --set-upstream origin 02_createcomponents

        If you want to rename the current branch, you can do:

        `git branch -m <newname> `    

        Create branch 03_createNavigation

            `git branch  03_createNavigation`
            `git checkout  03_createNavigation`
            `git push --set-upstream origin  03_createNavigation`

    ## Install bootstrap

        `npm install bootstrap --save`

    ## Configure bootstarp

        "styles": [
            "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
        ],

        restart server to see bootstrap working

        

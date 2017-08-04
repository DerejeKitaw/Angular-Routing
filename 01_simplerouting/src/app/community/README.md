# Create community module
    git branch 04_communityDetail
    git checkout 04_communityDetail
    git push --set-upstream origin 04_communityDetail

    When you generate a module, you can use the --routing option like ng g module my-module --routing to create a separate file my-module-routing.module.ts to store the module routes.

    on app directory run:
    ng g module community --routing --inline --dry
# create the following components under community
    open terminal in community folder and run:
    ng g c activities --dry 
childcare
events
general
groups
local news
politics
rideshare


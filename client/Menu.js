//When the 'Menu" template is created, run this code.
Template.Menu.onCreated(function () {
    var self = this;
    //autorun resets the subscriptions of 'self'
    self.autorun(function () {
        self.subscribe('recipes'); //Receive updates from the 'recipes' publication in 'public.js'.
    });
});

//'recipes' will be a cursor for all returned 'Recipes'
Template.Menu.helpers({
    recipes: ()=> {
        //Return only the recipes that have 'inMenu' set to true.
        return Recipes.find({inMenu: true});
    }
});
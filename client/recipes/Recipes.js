//When the 'Recipes" template is created, run this code.
Template.Recipes.onCreated(function () {
    var self = this;
    //autorun resets the subscriptions of 'self'
    self.autorun(function () {
        self.subscribe('recipes'); //Receive updates from the 'recipes' publication in 'public.js'.
    });
});

//'recipes' will be a cursor for all returned 'Recipes'
Template.Recipes.helpers({
    recipes: ()=> {
        return Recipes.find({});
    }
});

/*
 Events for the Recipes templates
 */
Template.Recipes.events({
    /*
     When there is a 'click' event on an element with class 'new-recipe'
     */
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }
});
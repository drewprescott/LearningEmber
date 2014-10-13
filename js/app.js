//Create the app
App = Ember.Application.create(
);


//Create the routes for the app, the pages that will be accessed
App.Router.map(function(){
    this.route('about', {path: '/aboutus'}); //All main pages - not Nouns
    this.resource('people', {path: '/family'}); //All type pages - Nouns
});


App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  likes: function(){
    return (33 + 3);
  }.property(),
  cat: 'img/cat.gif',
  theTime: function(){
    return (new Date()).toDateString()
  }.property()
});

App.AboutController = Ember.Controller.extend({
  story: "I'm learning Emberjs at the moment. I had to remove some things to start fresh so that I understand the concepts a little better."
});

//Route - how the data should be presented - access data
//Fetches Data
//Decides on what model to use for thecurrent route
//decides which template to render to the screen
App.PeopleRoute = Ember.Route.extend({
  model: function(){
    return App.PEOPLE;
  }
});

//Data for the Ember App
App.PEOPLE = [
  { id: 1,
    name: 'jeremy',
    age: 26,
    family: true
  },
  { id: 2,
    name: 'drew',
    age: 27,
    family: true
  },
  { id: 3,
    name: 'bower',
    age: 27,
    family: false
  },
  { id: 4,
    name: 'landon',
    age: 1.3,
    family: true
  }
];

App.COMPANIES = [
  {
    company: 'Walmart',
    reason: 'large company with great growth futuer prospects.'
  },
  {
    company: 'Target',
    reason: 'They are Walmarts largest competatior and they offer a great product.'
  },
  {
    company: 'JC Penny',
    reason: 'They have a long and great history and a potential future.'
  }
];

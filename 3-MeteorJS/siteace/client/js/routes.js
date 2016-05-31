/* global Router Websites*/

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('welcome', {
    to: "main"
  });
});

Router.route('/websites', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('website_list', {
    to: "main"
  });
});

Router.route('/websites/:_id', function () {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('website_detail', {
    to: "main", 
    data: function() {
      return Websites.findOne({_id:this.params._id});
    }
  });
});

Router.route('/about', function() {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('about', {
    to: "main",
  });
});
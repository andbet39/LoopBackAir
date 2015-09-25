var app = angular.module('todoApp', 
  ['lbServices',
   'ui.router',
   'angularFileUpload',
   'formly', 
   'formlyBootstrap',
   'ngMap',
   'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/file");
  //
  // Now set up the states
  $stateProvider
    .state('new_property', {
      url: "/new_property",
        views:{
          'content':{
                templateUrl:"/views/new_property.html", 
                controller:"PropertyController",
                resolve: {
                      property: function() {
                           return null;

                         }
                }
          },
         } 
    })
   .state('edit_property', {
       url: "/edit_property/:prop_id",
       views:{
          'content':{
            templateUrl:"/views/edit_property.html", 
            controller:"PropertyController",
                  },
          'menu':{
            templateUrl:"/views/edit_menu.html", 
            controller:"PropertyController"
           }
         },
         resolve: {
            property: function($stateParams, Property) {
                   return Property.findById({id:$stateParams.prop_id});
                   }
            }
      })
   .state('photo_property', {
       url: "/photo_property/:prop_id",
       views:{
          'content':{
            templateUrl:"/views/photo_property.html", 
            controller:"PhotoController",
                  },
          'menu':{
            templateUrl:"/views/edit_menu.html", 
            controller:"PropertyController"
           }
         },
         resolve: {
            property: function($stateParams, Property) {
                   return Property.findById({id:$stateParams.prop_id});
                   }
            }
      });
    });

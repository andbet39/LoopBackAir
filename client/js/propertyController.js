app.controller('PropertyController', function($scope, $http,Property,$location,$state,$stateParams,property) {
 
    $scope.property=property;
    console.log(property);


    $scope.$on('mapInitialized', function(event, map) {
      if(property.location){
        $scope.map.setCenter($scope.property.location);
           $scope.marker =  new google.maps.Marker({
                    position: property.location,
                    map: $scope.map,
                    title: $scope.property.title
                  });
        }
    });
   
    $scope.types = ['address'];

    $scope.propertyFields = [
        {
            key: 'title',   
            type: 'input',
            templateOptions: {
                type:'text',
                label: 'Listing title',
                placeholder: 'Enter post title',
                required: true
            }
        }
    ];

    $scope.placeChanged= function(place){
        $scope.place = this.getPlace();
        $scope.map.setCenter($scope.place.geometry.location);
    }

    $scope.save = function(){
        $scope.property.location= {'lat': $scope.place.geometry.location.H, 
                                   'lng': $scope.place.geometry.location.L};

        $scope.property.$save();
    }

    $scope.editFields = [
        {
            key:"address",
            type:"input",
            templateOptions: {
                type:'text',
                label: 'Address',
                placeholder: 'Enter propery address',
            }
        }
    ]
    
	
    $scope.create = function(){
        Property.create({'title':$scope.property.title}).$promise
            .then(function(property) { 
                $state.go("edit_property",{'prop_id':property.id});
             });
    }




});
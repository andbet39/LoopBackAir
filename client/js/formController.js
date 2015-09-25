app.controller('FormController', function($scope, $http) {
 
    // The model object that we reference
    // on the  element in index.html
    $scope.post = {};
    
   
    $scope.postFields = [
        {
            key: 'title',   
            type: 'input',
            templateOptions: {
                type:'text',
                label: 'Title',
                placeholder: 'Enter post title',
                required: true
            }
        },
        {
            key: 'body',
            type: 'textarea',
            templateOptions: {
                label: 'Body',
                placeholder: 'Enter post body',
                rows: 4,
                cols: 15,
                required: true
            }
        }
    ];
    
	
    $scope.save = function(){
        console.log($scope.post);
    }
});
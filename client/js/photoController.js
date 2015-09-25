app.controller('PhotoController', function($scope, $http,Container,Property,FileUploader,$state,$stateParams,property) {


        $scope.files = Container.getFiles({container:'files'});


        $scope.debug = function(){
            console.log($scope.files)
        }


         var uploader = $scope.uploader = new FileUploader({
            url: '/api/containers/files/upload'
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
            $scope.files = Container.getFiles({container:'files'});

        };

        console.info('uploader', uploader);



});
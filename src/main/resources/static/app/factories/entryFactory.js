'use strict';

angular.module('microBlog')
    .factory('EntryFactory', ['$resource', function($resource){

    return $resource('api/entry/:id', {id: '@id'});

}]);

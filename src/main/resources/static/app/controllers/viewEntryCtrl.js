'use strict';

angular.module('microBlog')
    .controller('ViewEntryCtrl', ['EntryFactory', '$routeParams', function(EntryFactory, $routeParams){
    let vm = this;

    vm.entry = EntryFactory.get($routeParams.id);
    //vm.comments = CommentFactory.query();

    return vm;
}]);

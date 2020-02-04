'use strict';

angular.module('microBlog')
    .controller('HomeCtrl', ['EntryFactory', function(EntryFactory){
    let vm = this;

    vm.entries = EntryFactory.query();

    vm.entries.$promise.then(() => vm.loaded = true);

    return vm;
}]);

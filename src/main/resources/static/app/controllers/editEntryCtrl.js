'use strict';

angular.module('microBlog')
    .controller('EditEntryCtrl', ['EntryFactory', '$routeParams', function(EntryFactory, $routeParams){
    let vm = this;

    vm.title = 'Edit Entry';
    vm.entry = EntryFactory.get({id: $routeParams.id});

    vm.save = () => EntryFactory.save(vm.entry);

    return vm;
}]);

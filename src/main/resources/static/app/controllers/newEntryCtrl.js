'use strict';

angular.module('microBlog')
    .controller('NewEntryCtrl', ['EntryFactory', '$location', function(EntryFactory, $location){
    let vm = this;

    vm.title = 'New Entry';
    vm.entry = {id: null};

    vm.save = () => EntryFactory.save(vm.entry)
        .$promise.then((entry) => $location.path('/admin/edit-entry/' + entry.id));

    return vm;
}]);

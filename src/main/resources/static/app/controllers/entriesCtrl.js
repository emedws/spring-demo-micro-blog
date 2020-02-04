'use strict';

angular.module('microBlog')
    .controller('EntriesCtrl', ['EntryFactory', '$location', function(EntryFactory, $location){
    let vm = this;

    vm.entries = EntryFactory.query();
    vm.entries.$promise.then(() => vm.loaded = true);

    vm.edit = (id) => $location.path('/admin/edit-entry/' + id);
    vm.delete = function(entry) {
        if(confirm('Delete entry "' + entry.title + '"?'))
            EntryFactory.delete(entry).$promise.then(() => vm.entries = EntryFactory.query());
    };

    return vm;
}]);

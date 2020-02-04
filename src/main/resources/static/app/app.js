'use strict';

angular.module('microBlog', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {templateUrl: 'app/views/home.html',  controller: 'HomeCtrl', controllerAs: 'homeCtrl'})
            .when('/entry/:id', {templateUrl: 'app/views/entryForm.html',  controller: 'ViewEntryCtrl', controllerAs: 'viewEntryCtrl'})
            .when('/admin/entries', {templateUrl: 'app/views/entries.html',  controller: 'EntriesCtrl', controllerAs: 'entriesCtrl'})
            .when('/admin/new-entry', {templateUrl: 'app/views/entryForm.html',  controller: 'NewEntryCtrl', controllerAs: 'ctrl'})
            .when('/admin/edit-entry/:id', {templateUrl: 'app/views/entryForm.html',  controller: 'EditEntryCtrl', controllerAs: 'ctrl'})
            .otherwise('/');
    }]);

'use strict';

angular.module('eHubClientApp')
.factory('Product', function ($resource) {
        return $resource('http://127.0.0.1:8080/product/:id');
});

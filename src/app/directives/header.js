var app;
(function (app) {
    var header;
    (function (header) {
        var HeaderController = /** @class */ (function () {
            function HeaderController($routeParams, dataAccessService, $scope, $window) {
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.$scope = $scope;
                this.$window = $window;
                this.selectedPoolId = this.$routeParams.poolId;
            }
            HeaderController.prototype.selectPool = function (poolId) {
                this.$window.location.href = this.$window.location.href.toString().replace('/' + this.$routeParams.poolId, '') + '/' + this.selectedPoolId;
            };
            HeaderController.$inject = ["$routeParams", "dataAccessService", "$scope", "$window"];
            return HeaderController;
        }());
        header.HeaderController = HeaderController;
        function headerDirective() {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'src/app/directives/header.html',
                controller: HeaderController,
                controllerAs: 'vm'
            };
        }
        angular.module("repair-fc").directive('header', headerDirective);
    })(header = app.header || (app.header = {}));
})(app || (app = {}));

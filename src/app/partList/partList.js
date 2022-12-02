var app;
(function (app) {
    var partList;
    (function (partList) {
        var PartListCtrl = /** @class */ (function () {
            function PartListCtrl($scope, $routeParams, dataAccessService) {
                // this.search();
                this.$scope = $scope;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.vin = "1G8ZK5271VZ354132";
                this.oddometer = "10000";
                this.oddometerType = "m";
            }
            PartListCtrl.prototype.search = function () {
                var _this = this;
                var payload = {
                    "vin": this.vin,
                    "oddometer": this.oddometer,
                    "oddometertype": this.oddometerType
                };
                app.Promises.getPartsO(this.dataAccessService, payload).
                    then(function (data) {
                    _this.parts = data.results;
                    console.log(_this.parts);
                    _this.$scope.$apply();
                });
            };
            PartListCtrl.$inject = ["$scope", "$routeParams", "dataAccessService"];
            return PartListCtrl;
        }());
        partList.PartListCtrl = PartListCtrl;
        angular.module("repair-fc").controller("PartListCtrl", PartListCtrl);
    })(partList = app.partList || (app.partList = {}));
})(app || (app = {}));

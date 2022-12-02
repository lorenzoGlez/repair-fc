var app;
(function (app) {
    var partList;
    (function (partList) {
        var PartListCtrl = /** @class */ (function () {
            function PartListCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                app.Promises.getParts(dataAccessService).
                    then(function (data) {
                    _this.parts = data.results;
                    console.log(_this.parts);
                });
            }
            PartListCtrl.$inject = ["$routeParams", "dataAccessService"];
            return PartListCtrl;
        }());
        partList.PartListCtrl = PartListCtrl;
        angular.module("repair-fc").controller("PartListCtrl", PartListCtrl);
    })(partList = app.partList || (app.partList = {}));
})(app || (app = {}));

var app;
(function (app) {
    var partList;
    (function (partList) {
        var PartListCtrl = /** @class */ (function () {
            function PartListCtrl() {
            }
            return PartListCtrl;
        }());
        partList.PartListCtrl = PartListCtrl;
        angular.module("repair-fc").controller("PartListCtrl", PartListCtrl);
    })(partList = app.partList || (app.partList = {}));
})(app || (app = {}));

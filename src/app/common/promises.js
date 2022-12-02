var app;
(function (app) {
    var Promises = /** @class */ (function () {
        function Promises() {
        }
        Promises.getPreferences = function (dataAccessService) {
            return new Promise(function (resolve, reject) {
                var preferencesResource = dataAccessService.getPreferencesResource();
                preferencesResource.get(function (dataPreferences) {
                    resolve(dataPreferences);
                }).$promise.catch(function (reason) {
                    reject(reason);
                });
            });
        };
        return Promises;
    }());
    app.Promises = Promises;
})(app || (app = {}));

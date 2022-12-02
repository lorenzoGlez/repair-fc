var app;
(function (app) {
    var service;
    (function (service) {
        var DataAccessService = /** @class */ (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getPreferencesResource = function () {
                return this.$resource("".concat(app.Env.baseUrl, "/Preferences.json"));
            };
            DataAccessService.prototype.setPoolOwnersResource = function () {
                return this.$resource("".concat(app.Env.baseUrl, "/Pools/:poolId/owners.json"), null, {
                    'update': { method: 'PUT', isArray: true }
                });
                // return this.$resource(null, null,{
                //     updateOwners: {
                //         url: `${ENVIRONMENT.getBaseURL}/Pools/:poolId/owners.json`,
                //         method: "put",
                //         isArray: true,
                //         data: ""
                //     }
                // })
            };
            DataAccessService.prototype.backupGamesResource = function () {
                return this.$resource("".concat(app.Env.baseUrl, "/Fixtures.json"), null, {
                    'update': { method: 'PUT', isArray: false }
                });
                // return this.$resource(null, null,{
                //     updateOwners: {
                //         url: `${ENVIRONMENT.getBaseURL}/Pools/:poolId/owners.json`,
                //         method: "put",
                //         isArray: true,
                //         data: ""
                //     }
                // })
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        service.DataAccessService = DataAccessService;
        angular.module("repair-fc").service("dataAccessService", DataAccessService);
    })(service = app.service || (app.service = {}));
})(app || (app = {}));

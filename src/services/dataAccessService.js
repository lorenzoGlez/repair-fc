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
            DataAccessService.prototype.getRFList = function () {
                return this.$resource("".concat(app.Env.fb_baseUrl, "/rf-api.json"));
            };
            DataAccessService.prototype.getRFListReal = function () {
                return this.$resource("".concat(app.Env.baseUrl, "/rf_api/search?id=bogus_id&store_id=bogus_store_id&vehicle_year=2018&make=Mazda&model=6&engine=L4-2.5L%20(SKYACTIV-G)&odometer_type=m&odometer_reading=50000"), null, 
                // {
                //     'update':{method:'PUT', isArray: true}
                // });
                {
                    'update': { method: 'PUT', isArray: true, headers: { "origin": "http://45.79.41.54" } }
                });
            };
            DataAccessService.prototype.getRFListO = function () {
                return this.$resource("".concat(app.Env.o_baseUrl), null, 
                // {
                //     'update':{method:'PUT', isArray: true}
                // });
                {
                    'update': { method: 'POST', isArray: false, headers: { "origin": "http://45.79.41.54" } }
                });
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

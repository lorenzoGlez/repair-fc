var app;
(function (app) {
    var Preferences = /** @class */ (function () {
        function Preferences(dataAccessService) {
            var _this = this;
            this.dataAccessService = dataAccessService;
            app.Promises.getPreferences(dataAccessService).then(function (dataPreferences) {
                _this.api = dataPreferences.api;
                _this.backup = dataPreferences.backup;
                if (_this.onLoad) {
                    _this.onLoad();
                }
            });
        }
        Preferences.$inject = ["dataAccessService"];
        return Preferences;
    }());
    app.Preferences = Preferences;
})(app || (app = {}));

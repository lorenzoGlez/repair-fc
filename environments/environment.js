var app;
(function (app) {
    var Env = /** @class */ (function () {
        function Env() {
        }
        Env.baseUrl = "http://45.79.41.54:4000";
        Env.fb_baseUrl = "https://repair-fc-default-rtdb.firebaseio.com";
        Env.o_baseUrl = " https://alldataforecast.vercel.app/api/forecast";
        return Env;
    }());
    app.Env = Env;
})(app || (app = {}));

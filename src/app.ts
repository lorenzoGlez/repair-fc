module app{
    //var main = angular.module("repair-fc",["ngResource","ngRoute","chart.js"]);
    var main = angular.module("repair-fc",["ngRoute","ngResource"]);

    main.config(routeConfig);

    function routeConfig($routeProvider: ng.route.IRouteProvider): void{
        $routeProvider
            .when("/partList",
                {
                    templateUrl: "/src/app/partList/partList.html",
                    controller: "PartListCtrl as vm"
                })          
            .otherwise({redirectTo: "/partList"});
    }
}
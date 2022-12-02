
module app.header{

    export class HeaderController{

        selectedPoolId: string;
        
        static $inject=["$routeParams","dataAccessService", "$scope", "$window"];
        constructor(private $routeParams, 
            private dataAccessService: app.service.DataAccessService, 
            private $scope, private $window){
                
            this.selectedPoolId = this.$routeParams.poolId;
    
        }

        selectPool(poolId?: string){
            this.$window.location.href = this.$window.location.href.toString().replace('/' + this.$routeParams.poolId, '') + '/' + this.selectedPoolId;
        }
    }

    function headerDirective() {
        return {
            restrict: 'E',
            scope: {
    
            },
            templateUrl: 'src/app/directives/header.html',
            controller: HeaderController,
            controllerAs: 'vm'
        };

    }

    angular.module("repair-fc").directive('header', headerDirective);
}
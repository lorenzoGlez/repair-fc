module app.partList{

    export interface  IPartsPayload{
        id: number;
        store_id: number;
        vin: string;
        odometer_type: string;
        odometer_reading: number;
    }

    export interface IPartsResoultSource{
        results: IPartSource[];
    }

    export interface IPartSource{
        aces_part_id: number;
        aces_part_name: string;
        engine: string;
        frequency_sum: number;
        make: string;
        mileage_bin: number;
        model: number;
        probability: number;
        ranking: number;
        repair_type: string;
        vehicle_year: number;
    }


    export class PartListCtrl {

        parts: IPartSource[];
        vin: string = "1G8ZK5271VZ354132";
        oddometer: string = "10000";
        oddometerType: string = "m";

        static $inject=["$scope", "$routeParams","dataAccessService"];
        constructor(private $scope, private $routeParams, private dataAccessService: service.DataAccessService){
            // this.search();
            
        }

        search(){
            let payload ={
                "vin": this.vin,
                "oddometer": this.oddometer,
                "oddometertype": this.oddometerType
            }

            Promises.getPartsO(this.dataAccessService, payload).
            then((data: IPartsResoultSource) => {
                this.parts = data.results;
                console.log(this.parts);
                this.$scope.$apply();
            });
        }
       
    }
    angular.module("repair-fc").controller("PartListCtrl", PartListCtrl);
}
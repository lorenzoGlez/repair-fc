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

        static $inject=["$routeParams","dataAccessService"];
        constructor(private $routeParams, private dataAccessService: service.DataAccessService){
            
            Promises.getParts(dataAccessService).
            then((data: IPartsResoultSource) => {
                this.parts = data.results;
                console.log(this.parts);
            });
        }
       
    }
    angular.module("repair-fc").controller("PartListCtrl", PartListCtrl);
}
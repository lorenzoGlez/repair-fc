module app{
    declare const Promise: any;
    

    export class Promises{

        static getPreferences(dataAccessService: app.service.DataAccessService):Promise<app.IPreferences>{
            return new Promise((resolve, reject) => {
                var preferencesResource = dataAccessService.getPreferencesResource();
                preferencesResource.get((dataPreferences:app.IPreferences) =>{
                    resolve(dataPreferences);
                }).$promise.catch((reason) => {
                    reject(reason);
                });
            });
        }

        static getParts(dataAccessService: app.service.DataAccessService): Promise<app.partList.IPartsResoultSource>{
            return new Promise((resolve, reject) => {
                var poolResource = dataAccessService.getRFList();
                poolResource.get((data)=>{
                    resolve(data);
                }).$promise.catch((reason) => {
                    reject(reason);
                });
            });
        }

        static getPartsReal(dataAccessService: app.service.DataAccessService): Promise<app.partList.IPartsResoultSource>{
            return new Promise((resolve, reject) => {
                var poolResource = dataAccessService.getRFListReal();
                var po = poolResource.update({}, null, (data)=>{
                    resolve(data);
                }).$promise.catch((reason) => {
                    reject(reason);
                });
            });
        }

        static getPartsO(dataAccessService: app.service.DataAccessService, payload): Promise<app.partList.IPartsResoultSource>{
            return new Promise((resolve, reject) => {
                
                var poolResource = dataAccessService.getRFListO();
                var po = poolResource.update({}, payload, (data)=>{
                    resolve(data);
                }).$promise.catch((reason) => {
                    reject(reason);
                });
            });
        }
       
    }
}
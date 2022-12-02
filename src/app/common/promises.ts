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

       
    }
}
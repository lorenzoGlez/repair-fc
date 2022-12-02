module app.service{
    interface IDataAccessService{
        getPreferencesResource(): ng.resource.IResourceClass<IPreferencesResource>;
        getRFList(): ng.resource.IResourceClass<IPartsResource>;
    }

    interface IPreferencesResource extends ng.resource.IResource<IPreferences>{}

    interface IPartsResource extends ng.resource.IResource<app.partList.IPartsResoultSource>{}


    export class DataAccessService implements IDataAccessService{
            
            static $inject = ["$resource"];
            constructor(private $resource: ng.resource.IResourceService){
                
            }

            getPreferencesResource():ng.resource.IResourceClass<IPreferencesResource>{
                return this.$resource(`${Env.baseUrl}/Preferences.json`)
            }

            getRFList(): any {
                return this.$resource(`${Env.fb_baseUrl}/rf-api.json`)
            }

            getRFListReal(): any {
                return this.$resource(`${Env.baseUrl}/rf_api/search?id=bogus_id&store_id=bogus_store_id&vehicle_year=2018&make=Mazda&model=6&engine=L4-2.5L%20(SKYACTIV-G)&odometer_type=m&odometer_reading=50000`,null,
                // {
                //     'update':{method:'PUT', isArray: true}
                // });
                {
                    'update':{method:'PUT', isArray: true, headers: {"origin": "http://45.79.41.54"}}
                });
            }

            setPoolOwnersResource():any{
                return this.$resource(`${Env.baseUrl}/Pools/:poolId/owners.json`,null,
                {
                    'update':{method:'PUT', isArray: true}
                });
                // return this.$resource(null, null,{
                //     updateOwners: {
                //         url: `${ENVIRONMENT.getBaseURL}/Pools/:poolId/owners.json`,
                //         method: "put",
                //         isArray: true,
                //         data: ""
                //     }
                // })
            }

            backupGamesResource():any{
                return this.$resource(`${Env.baseUrl}/Fixtures.json`,null,
                {
                    'update':{method:'PUT', isArray: false}
                });
                // return this.$resource(null, null,{
                //     updateOwners: {
                //         url: `${ENVIRONMENT.getBaseURL}/Pools/:poolId/owners.json`,
                //         method: "put",
                //         isArray: true,
                //         data: ""
                //     }
                // })
            }
        }
        angular.module("repair-fc").service("dataAccessService", DataAccessService);
}
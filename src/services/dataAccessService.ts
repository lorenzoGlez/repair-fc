module app.service{
    interface IDataAccessService{
        getPreferencesResource(): ng.resource.IResourceClass<IPreferencesResource>;
    }

    interface IPreferencesResource extends ng.resource.IResource<IPreferences>{}


    export class DataAccessService implements IDataAccessService{
            
            static $inject = ["$resource"];
            constructor(private $resource: ng.resource.IResourceService){
                
            }

            getPreferencesResource():ng.resource.IResourceClass<IPreferencesResource>{
                return this.$resource(`${Env.baseUrl}/Preferences.json`)
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
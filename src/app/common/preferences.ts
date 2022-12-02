module app{
    export interface IPreferencesApi{
        url: string;
        header:{
            key: string;
            value: string;
        }
    }
    export interface IPreferences{
        api: IPreferencesApi;
        backup: IPreferencesApi;
    }

    export class Preferences implements IPreferences{

        api: IPreferencesApi;
        backup: IPreferencesApi;

        onLoad?:() => void;

        static $inject = ["dataAccessService"]
        constructor(private dataAccessService){
            Promises.getPreferences(dataAccessService).then((dataPreferences:app.IPreferences) =>{
                this.api = dataPreferences.api;
                this.backup = dataPreferences.backup;
                if(this.onLoad){
                    this.onLoad();
                }
            });
        }

    }

}
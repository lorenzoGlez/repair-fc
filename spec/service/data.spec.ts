
describe('Data Service', function(){
    var $httBackend: ng.IHttpBackendService;
    var dataAccessService: app.service.DataAccessService;
    

    beforeEach(function(){
        angular.mock.module('repair-fc');
    } );
    

    beforeEach(() => {
        /*inject(function(_$httpBackend_, DataAccessService){
            $httBackend = _$httpBackend_;
            this.dataAccessService = DataAccessService;
            
        });*/
        inject(function(_$httpBackend_, $injector){
            //dataAccessService = DataAccessService;
            $httBackend = _$httpBackend_;
            dataAccessService = $injector.get('dataAccessService');
        });
    });

    afterEach(function(){
        $httBackend.verifyNoOutstandingExpectation();
        $httBackend.verifyNoOutstandingRequest();
    });

    it('should return preferences', ()=>{
        expect(dataAccessService).toBeDefined();

        $httBackend.expectGET("https://quiniela-repair-fc-2018.firebaseio.com/Preferences.json").respond(
            {"backupURL":"backup",
            "headersAPI":{"X-Auth-Token":"token"},
            "urlAPI":"urlAPI"
            }
        );

        let pref: app.IPreferences;
        app.Promises.getPreferences(dataAccessService).then((preferences:app.IPreferences) => {
            pref = preferences;
            expect(pref.api.url == "urlAPI");
        });

        

        $httBackend.flush();
    })
})
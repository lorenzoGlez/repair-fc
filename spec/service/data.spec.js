describe('Data Service', function () {
    var $httBackend;
    var dataAccessService;
    beforeEach(function () {
        angular.mock.module('fifa');
    });
    beforeEach(function () {
        /*inject(function(_$httpBackend_, DataAccessService){
            $httBackend = _$httpBackend_;
            this.dataAccessService = DataAccessService;
            
        });*/
        inject(function (_$httpBackend_, $injector) {
            //dataAccessService = DataAccessService;
            $httBackend = _$httpBackend_;
            dataAccessService = $injector.get('dataAccessService');
        });
    });
    afterEach(function () {
        $httBackend.verifyNoOutstandingExpectation();
        $httBackend.verifyNoOutstandingRequest();
    });
    it('should return preferences', function () {
        expect(dataAccessService).toBeDefined();
        $httBackend.expectGET("https://quiniela-fifa-2018.firebaseio.com/Preferences.json").respond({ "backupURL": "backup",
            "headersAPI": { "X-Auth-Token": "token" },
            "urlAPI": "urlAPI"
        });
        var pref;
        app.Promises.getPreferences(dataAccessService).then(function (preferences) {
            pref = preferences;
            expect(pref.api.url == "urlAPI");
        });
        $httBackend.flush();
    });
});

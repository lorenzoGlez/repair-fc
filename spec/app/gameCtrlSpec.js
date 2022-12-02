describe('gameListCtrl', function () {
    //var $httBackend: ng.IHttpBackendService;
    //var dataAccessService: app.service.DataAccessService;
    //var $controller: ng.IControllerService;
    var createController;
    var scope;
    beforeEach(angular.mock.module('fifa'));
    beforeEach(function () {
        inject(function (_$controller_, $rootScope) {
            //inject(function(_$controller_, _$httBackend_, DataAccessService) {
            //$httBackend = _$httBackend_;
            //$controller = _$controller_;
            //dataAccessService = DataAccessService;
            scope = $rootScope.$new();
            createController = function () {
                return _$controller_('gameListCtrl', {
                    '$scope': scope
                });
            };
        });
    });
    /*afterEach(function(){
        $httBackend.verifyNoOutstandingExpectation();
        $httBackend.verifyNoOutstandingRequest();
    });*/
    it("should initialize correctly", function () {
        //expect(dataAccessService).toBeDefined();
        var controller = createController();
        expect(controller).toBeDefined();
    });
});

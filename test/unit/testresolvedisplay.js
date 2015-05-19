/**
 * Created by viitanenm on 3/27/15.
 */
describe('The resolve display', function () {
    beforeEach(module('resolveDisplay'));
    describe('ResolveFactory', function () {
        var resolveFactory, $httpBackend, $q,
            data = [
                {
                    "name": "Jenny"
                },
                {
                    "name": "John"
                },
                {
                    "name": "James"
                },
                {
                    "name": "Jim"
                },
                {
                    "name": "Jason"
                },
                {
                    "name": "Jared"
                }
            ];

        beforeEach(inject(function ($injector) {
            resolveFactory = $injector.get('ResolveFactory');
            $httpBackend = $injector.get('$httpBackend');
            $q = $injector.get('$q');
        }));

        it('getData returns json', function () {
            $httpBackend.expectGET('app/names.json').respond(data);
            resolveFactory.getData().then(function (d) {
                expect(d[0].name).toBe("Jenny");
            });

            $httpBackend.flush();
        });
        it('getBadData returns json', function () {
            $httpBackend.expectGET('doesnotexist.json').respond(404, 'Err');
            resolveFactory.getBadData().catch(function (d) {
                expect(d.status).toBe(404);
            });

            $httpBackend.flush();
        });
    });
});
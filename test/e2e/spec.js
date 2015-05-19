/**
 * Created by viitanenm on 3/27/15.
 */
describe("An E2E Test spec", function () {
    it("looks familiar", function () {
        expect(true).toBe(true);
    })
})


describe("An E2E Test spec", function () {
    it("can enter text", function () {
        browser.get("/#/name");
        var testText = 'I am typing in the input box';
        element(by.model('mc.name.first')).sendKeys(testText).then(function () {
            return element(by.binding('mc.name.first')).getText();
        })
            .then(function (text) {
                expect(text).toBe('Marko' + testText + ' (9)');
            });
    });
    /*it("can click a link", function () {
        element(by.css('.click-me')).click().then(function () {
            expect(browser.getLocationAbsUrl()).toBe('/name/details');
        });
    })*/
});
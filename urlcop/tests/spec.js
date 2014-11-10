var assert = require('assert');
var UrlCop = require('./../index');

describe('Test UrlCop run function', function () {
    it('Test static provider', function (done) {
        UrlCop.run({
            source: ['examples\\test1.js'],
            provider: {
                name: 'static',
                arguments: [
                    { method: 'GET', url: 'api/customers/{customerId}' },
                    { method: 'GET', url: 'api/orders/{orderId}' },
                    { method: 'GET', url: 'api/orders/{orderId}/products' }
                ]
            }
        }, compareWithExpectedResult(done));
    });
    
    it('Test WebAPI provider', function (done) {
        UrlCop.run({
            source: ['examples\\test1.js'],
            provider: {
                name: 'webapi',
                arguments: {
                    assemblyFile: 'webapi\\WebApiSample\\bin\\WebApiSample.dll',
                    typeName: 'WebApiSample.UrlCopInterop'
                }
            }
        }, compareWithExpectedResult(done));
    });
    
    function compareWithExpectedResult(done) {
        return function (actualResult) {
            var expectedResult = [
                { file: 'examples\\test1.js', line: 8, expression: '\'api/invoices/\' + id' }
            ];
            assert.deepEqual(actualResult, expectedResult);
            done();
        };
    }
});

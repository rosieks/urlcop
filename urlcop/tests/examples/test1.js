define(['plugins/http'], function (http) {
    return {
        test: function () {
            http.get('api/customers/' + id).done(function (result) {
            });
            http.get('api/orders/' + id + '/products').done(function (result) {
            });
            http.post('api/invoices/' + id).done(function () {
            });
        }
    };
});
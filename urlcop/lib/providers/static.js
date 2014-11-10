var StaticUrlProvider = module.exports = function (settings) {
    if (settings.constructor.name === 'Array') {
        this.routeTable = settings;
    }
};

StaticUrlProvider.prototype.getUrls = function (callback) {
    callback(this.routeTable);
};
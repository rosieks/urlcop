var edge = require("edge");

var WebApiUrlProvider = module.exports = function (settings) {
    this.getApiExplorer = edge.func({
        assemblyFile: settings.assemblyFile,
        typeName: settings.typeName,
        methodName: "GetApiDescrption"
    });
};

WebApiUrlProvider.prototype.getUrls = function (callback) {
    this.getApiExplorer(null, function (error, result) {
        if (error) {
            throw error;
        }
        
        callback(result);
    });
};
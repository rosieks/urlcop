var fs = require("fs");
var finder = require("./finder");
var async = require("async");

module.exports = function (settings, callback) {
    
    var ProviderBuilder = require("./providers/" + settings.provider.name);
    var provider = new ProviderBuilder(settings.provider.arguments);
    
    provider.getUrls(function (routes) {
        
        async.map(settings.source, function (src, fileCallback) {
            
            fs.readFile(src, function (err, data) {
                var lines = data.toString("utf8").replace(/^\uFEFF/, "").split("\n");
                
                var results = [];
                lines.forEach(function(line, i) {
                    finder.find(line, function (match) {
                        var doesAnyMatch = routes.some(function (route) {
                            return finder.match(match.normalized, route.url);
                        });
                        if (!doesAnyMatch) {
                            results.push({
                                file: src,
                                line: i + 1,
                                expression: match.expression
                            });
                        }
                    });
                });
                fileCallback(null, results);
            });
        }, function (err, results) {
            callback([].concat.apply([],results));
        });
    });
};
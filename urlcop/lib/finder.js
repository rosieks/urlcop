module.exports = (function () {
    
    var concatPattern = "\\s*\\+\\s*";
    var identifier = "\\w[\\w\\d]+";
    var complexIdentifier = identifier + "(\\(\\))?";
    var expression = complexIdentifier + "(\\." + complexIdentifier + ")*";
    var urlPattern = new RegExp("(('api/[\\w-\\d\\/]+')(" + concatPattern + expression + "(" + concatPattern + "'[\\w-\\d\\/]+')?)?)", "ig");
    var args = new RegExp("([\'\"]" + concatPattern + expression + "(" + concatPattern + "[\'\"])?)", "ig");
    
    return {
        find: function (line, callback) {
            var match;
            while (match = urlPattern.exec(line)) {
                callback({
                    expression: match[0],
                    normalized: normalize(match[0])
                });
            }
        },
        match: function (normalized, route) {
            return !!new RegExp(normalized, "i").exec(route);
        }
    };
    
    function normalize(expression) {
        expression = expression.replace(args, "{\\w[\\w\\d]+}");
        if (expression.indexOf("\"") === 0 || expression.indexOf("\'") === 0) {
            expression = expression.substr(1);
        }
        
        if (expression.lastIndexOf("\"") === expression.length - 1 || expression.lastIndexOf("\'") === expression.length - 1) {
            expression = expression.substr(0, expression.length - 1);
        }
        
        return expression;
    }
})();
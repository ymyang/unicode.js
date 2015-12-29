/**
 * Created by yang on 2015/12/29.
 */
var unicode = module.exports = {};

unicode.toUnicode = function(str) {
    if (!str) {
        return str;
    }
    return str.replace(/[\u00FF-\uFFFF]/g,function($0){
        return '\\u'+$0.charCodeAt().toString(16);
    });
};

unicode.fromUnicode = function(str) {
    if (!str) {
        return str;
    }
    return str.replace(/\\u[a-zA-Z0-9]{4}/g,function($0){
        return String.fromCharCode(parseInt($0.substring(2), 16));
    });
};
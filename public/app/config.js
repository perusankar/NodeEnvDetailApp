/**
 * config
 */
"use strict";
var Config = (function () {
    function Config() {
    }
    Object.defineProperty(Config, "API_ENDPOINT", {
        get: function () { return 'http://localhost:8000/'; },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map
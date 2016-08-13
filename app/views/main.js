"use strict";
var frameModule = require("ui/frame");
var navigationEntry = {
    moduleName: "views/menu",
    backstackVisible: false,
    clearHistory: true
};
function onStartTap() {
    frameModule.topmost().navigate(navigationEntry);
}
exports.onStartTap = onStartTap;
function onContinueTap() {
    frameModule.topmost().navigate(navigationEntry);
}
exports.onContinueTap = onContinueTap;
//# sourceMappingURL=main.js.map
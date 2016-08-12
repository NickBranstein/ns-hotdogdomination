"use strict";
var frameModule = require("ui/frame");
function onStartTap() {
    frameModule.topmost().navigate("views/menu");
}
exports.onStartTap = onStartTap;
function onContinueTap() {
    frameModule.topmost().navigate("views/menu");
}
exports.onContinueTap = onContinueTap;
//# sourceMappingURL=main.js.map
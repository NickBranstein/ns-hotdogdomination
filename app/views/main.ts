import frameModule = require("ui/frame");

export function onStartTap() {
    frameModule.topmost().navigate("views/menu");
}

export function onContinueTap() {
    frameModule.topmost().navigate("views/menu");
}
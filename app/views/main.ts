import * as frameModule from "ui/frame";

var navigationEntry = {
    moduleName: "views/menu",
    backstackVisible: false,
    clearHistory: true
};

export function onStartTap() {
    frameModule.topmost().navigate(navigationEntry);
}

export function onContinueTap() {
    frameModule.topmost().navigate(navigationEntry);
}
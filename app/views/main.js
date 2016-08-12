// import { EventData } from "data/observable";
// import { Page } from "ui/page";
// import { HelloWorldModel } from "./mainViewModel";
"use strict";
// // Event handler for Page "navigatingTo" event attached in main-page.xml
// export function navigatingTo(args: EventData) {
//     // Get the event sender
//     var page = <Page>args.object;
//     page.bindingContext = new HelloWorldModel();
// }
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
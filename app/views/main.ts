// import { EventData } from "data/observable";
// import { Page } from "ui/page";
// import { HelloWorldModel } from "./mainViewModel";

// // Event handler for Page "navigatingTo" event attached in main-page.xml
// export function navigatingTo(args: EventData) {
//     // Get the event sender
//     var page = <Page>args.object;
//     page.bindingContext = new HelloWorldModel();
// }
import frameModule = require("ui/frame");

export function onStartTap() {
    frameModule.topmost().navigate("views/menu");
}

export function onContinueTap() {
    frameModule.topmost().navigate("views/menu");
}
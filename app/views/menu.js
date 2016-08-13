"use strict";
var dataService_1 = require("../services/dataService");
function onLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = dataService_1.DataService.load();
}
exports.onLoaded = onLoaded;
function onJunkyardTap(args) {
    var game = args.object.bindingContext;
    dataService_1.DataService.save(game);
}
exports.onJunkyardTap = onJunkyardTap;
//# sourceMappingURL=menu.js.map
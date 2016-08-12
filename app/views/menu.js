"use strict";
var game_1 = require("../models/game");
function onLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new game_1.Game();
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=menu.js.map
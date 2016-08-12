"use strict";
var observable = require("data/observable");
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
        // initialize from local storage?
        this.Money = 13240.00;
    }
    return Game;
}(observable.Observable));
exports.Game = Game;
//# sourceMappingURL=game.js.map
"use strict";
var fileSystem = require("file-system");
var Game_1 = require("../models/Game");
var DataService = (function () {
    function DataService() {
    }
    DataService.save = function (game) {
        var file = fileSystem.knownFolders.documents().getFile(this._file);
        var json = JSON.stringify(game);
        file.writeText(json);
    };
    DataService.load = function () {
        var path = fileSystem.path.join(fileSystem.knownFolders.documents().path, this._file);
        if (!fileSystem.File.exists(path))
            return new Game_1.Game();
        var file = fileSystem.knownFolders.documents().getFile(this._file);
        var json = file.readTextSync();
        return JSON.parse(json);
    };
    DataService._file = "game.json";
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map
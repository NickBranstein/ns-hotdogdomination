import * as fileSystem from "file-system";
import { Game } from "../models/Game";

export class DataService {
    private static _file: string = "game.json";

    public static save(game: Game){
        var file = fileSystem.knownFolders.documents().getFile(this._file);
        var json = JSON.stringify(game);
        file.writeText(json)
    }

    public static load(): Game{
        var path = fileSystem.path.join(fileSystem.knownFolders.documents().path, this._file);
        
        if(!fileSystem.File.exists(path))
            return new Game();
        
        var file = fileSystem.knownFolders.documents().getFile(this._file);        
        var json = file.readTextSync();
        
        return <Game>JSON.parse(json);
    }
}
import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Game } from "../models/game";
import { DataService } from "../services/dataService";

export function onLoaded(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = DataService.load();
}

export function onJunkyardTap(args: any){    
    var game = <Game>args.object.bindingContext;

    DataService.save(game);
}
import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Game } from "../models/game";
import * as fileSystem from "file-system";

export function onLoaded(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new Game();
    
}
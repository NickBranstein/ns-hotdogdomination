import * as observable from "data/observable";

export class Game extends observable.Observable {
    public Money: number;

     constructor() {
        super();

        // initialize from local storage?
        this.Money = 13240.00;
    }
}
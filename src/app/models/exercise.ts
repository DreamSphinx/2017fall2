import * as $ from 'jquery';

export class List {
    myArray: String[] = [];
}

export class Player {
    id: number;
    name: string = "Eric Whaley";   
}

export class Session {
    players: Player[] = [new Player(), new Player()];
}
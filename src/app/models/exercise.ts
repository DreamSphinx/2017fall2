export class List {
    myArray: String[] = [];
    weight: string;
}

export class User {
    id: number;
    name: string;   
}

export class Session {
    users: User[] = [new User(), new User()];
    progress: String[] = [];
}
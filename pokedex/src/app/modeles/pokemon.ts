export class Pokemon {
    id: number;
    fullname: string;
    cp: number;
    hp: number;
    types: string;
    picture: string;
    created: Date;

constructor(
    id: number = 0,
    fullname: string = '',
    cp: number = 0,
    hp: number = 0,
    types: string = '',
    picture: string = '',
    created: Date = new Date,){
    
    this.id = id;
    this.fullname = fullname;
    this.cp = cp;
    this.hp = hp;
    this.types = types;
    this.picture = picture;
    this.created = created;
}

}
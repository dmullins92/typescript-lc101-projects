import { Payload } from './Payload';

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
}
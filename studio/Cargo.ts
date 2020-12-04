import { Payload } from './Payload';

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(massKg, material) {
        this.massKg = massKg;
        this.material = material;
    }
}
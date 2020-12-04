import { Astronaut } from './Astronaut'
import { Cargo } from './Cargo'
import { Payload } from './Payload'

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Array<Cargo> = [];
    astronauts: Array<Astronaut> = [];
    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let mass = 0;
        for (let itemToSum in items) {
            mass += items[itemToSum].massKg
        }
        return mass;        
    }

    currentMassKg(): number {
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}
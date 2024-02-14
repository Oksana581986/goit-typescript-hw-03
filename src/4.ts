
class Key {
    constructor(private signature: number = Math.random()) {};
    getSignature(): number {
    return this.signature;
}
}

class Person {
    constructor( private key: Key) {}
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    constructor(
     protected key: Key,  
     protected door: boolean = false,
     private tenants: Person[] = []) {}

    
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log("Person came in.");
        } else {
            console.log("The door is closed. Person cannot come in.");
        }
    }
    abstract OpenDoor(key: Key): void;
}
    
class MyHouse extends House {
        OpenDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("The door is opened.");
        } else {
            console.log("Invalid key. The door remains closed.");
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());
house.comeIn(person);

export {};
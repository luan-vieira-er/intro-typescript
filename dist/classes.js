"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Admin extends User {
    getFullName() {
        return `ADMIN - ${this.firstName} ${this.lastName}`;
    }
}
let user = new Admin('Luan', 'Vieira', 27);
console.log("🤬 ~ file: classes.ts:14 ~ user:", user.getFullName());

class User {
    protected readonly firstName: string
    protected readonly lastName: string
    protected age: number

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    public getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Admin extends User {
    public getFullName(){
        return `ADMIN - ${this.firstName} ${this.lastName}`
    }
}

// let user = new Admin('Luan', 'Vieira', 27)

// console.log("🤬 ~ file: classes.ts:14 ~ user:", user.getFullName())

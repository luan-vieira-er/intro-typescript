interface UserInterface {
    firstName: string
    lastName: string
    age: number

    getFullName(): string
}

const getUser = (user: UserInterface): string => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`
}

let user = {
    firstName: 'string',
    lastName: 'string',
    age: 9,

    getFullName(){
        return `${user.firstName} ${user.lastName}`
    }
}

class Person implements UserInterface {
    firstName: string
    lastName: string
    age: number

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getFullName(){
        return `${user.firstName} ${user.lastName}`
    }
}

let person = new Person('first', 'last', 12)

console.log("🤬 ~ file: interfaces.ts:18 ~ getUser(user):", getUser(person))

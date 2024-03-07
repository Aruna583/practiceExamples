//'this' keyword in js


const user = {
    name : "Aruna",
    greet() {
        return `Hello ${this.name}` //normal function will refer to that object so it will return that name
    },
    fareWell :() => {
        return `Hello ${this.name}` // arrow function will always refer to the window object it will be undefined
    }
}

console.log(user.greet())
console.log(user.fareWell())
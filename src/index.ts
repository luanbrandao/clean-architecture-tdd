class Person {
  speak(name?: string): string {
    return `Ola ${name?.toLocaleUpperCase() ?? 'Fulano'}`
  }
}

const person = new Person()
console.log(person.speak('luan'))
console.log(person.speak())
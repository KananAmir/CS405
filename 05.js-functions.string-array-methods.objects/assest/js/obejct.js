const person = {
    firstName: 'Ali',
    lastName: 'Karimov',
    age: 20,
    address: {
        country: 'Finland',
        city: 'Helsinki',
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    isMarried: true,
    getFullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    getBirthYear(){
        return new Date().getFullYear() - this.age;
    }
}

console.log(person.skills);
console.log(person["city"]);

person.groupName = "cs405"

console.log(person.getFullName());
console.log(person.getBirthYear());

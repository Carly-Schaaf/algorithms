function Model () {
    this.hash = {};
}

Model.prototype.set = function(key, value) {
    this.hash[key] = value;
}

Model.prototype.get = function(key) {
    return this.hash[key];
}

const person = new Model();
person.set('name', 'Bob');
console.log(person.get('name')); 

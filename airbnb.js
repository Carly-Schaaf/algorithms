function Model () {
    this.hash = {};
}

Model.prototype.set = function(key, value) {
    this.hash[key] = value;
}

Model.prototype.unset = function(key) {
    this.hash[key] = null;
}

Model.prototype.get = function(key) {
    return this.hash[key];
}

Model.prototype.has = function(key) {
    if (this.hash[key]) {
        return true;
    } else {
        return false;
    }
}

const person = new Model();
person.set('name', 'Bob');
console.log(person.get('name'));   // -> 'Bob'
console.log(person.has('name'));   // -> true
console.log(person.has('lastname'));   // -> false
person.unset('name');
console.log(person.has('name')) // false
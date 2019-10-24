function Model () {
    this.hash = {};
    this.callbacks = [];
}

Model.prototype.set = function(key, value) {
    let prevValue;
    if (this.has(key)) { prevValue = this.hash[key]; }

    this.hash[key] = value;
    if (this.has(key) && (prevValue !== value)) {
        this.callbacks.forEach(cb => {
            cb(key, prevValue, value);
        })
    }
}

Model.prototype.unset = function(key) {
    delete this.hash[key];
}

Model.prototype.get = function(key) {
    return this.hash[key];
}

Model.prototype.has = function(key) {
    if (key in this.hash) {
        return true;
    } else {
        return false;
    }
}

Model.prototype.on = function(type, cb) {
    if (!this.callbacks.includes(cb)) {
        this.callbacks.push(cb);
    }
}

const person = new Model();
person.set('name', 'Bob');
person.set('undefined', undefined);
person.set('male', false);
console.log(person.get('name') === 'Bob');   
console.log(person.get('undefined') === undefined);  
console.log(person.has('name') === true);   
console.log(person.has('male') === true);   
console.log(person.has('undefined') === true);
console.log(person.has('lastname') === false);
person.unset('name');
console.log(person.has('name') === false);

person.set('name', 'Bob');
person.on('change', function (key, oldVal, newVal) {
    // called when any attribute changes
    console.log('1. attr', key, 'changed from', oldVal, 'to', newVal);
});

person.on('change', function (key, oldVal, newVal) {
    // called when any attribute changes
    console.log('2. attr', key, 'changed from', oldVal, 'to', newVal);
});

person.set('name', 'Bob2') // should see 2 console logs
person.set('undefined', undefined); // should see nothing


person.unset('name');
person.unset('undefined');
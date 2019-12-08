// function getFrequentWordCount(words, k) {
//     const result = [];
//     for (let index = 1; index <= k; index++) {
//         const hash = {};
//         words.forEach(word => {
//             if (word.length >= index) {
//                 const fragment = word.slice(0, index);
//                 if (hash[fragment]) {
//                     hash[fragment] += 1;
//                 } else {
//                     hash[fragment] = 1;
//                 }
//             }
//         })
//         result.push(Object.keys(hash).length);
//     }
//     return result;
// }

// const words = ["apple", "app", "apricot", "stone"]
// const k = 8
// console.log(getFrequentWordCount(words, k) === [2, 2, 3, 3, 3, 1, 1, 0])
// // [2, 2, 3, 3, 3, 1, 1, 0]
// //  1, 2, 3, 4, 5, 6, 7, 8
// You are given two functions, getUser and activateUser.Both of these functions use callbacks - getUser takes callback(error, response) as a parameter, and activateUser takes data and callback(error, response) as parameters.

// Your task is to define a corresponding set of asynchronous functions that return a Promise as a result:

// getUserPromise accepts the getUser callback and returns a Promise with data(the output of the original getUser function).If the callback execution ended up with an error, the resulting promise should also be rejected with this error.
// activateUserPromise accepts the data returned by getUser and the activateUser callback, and returns a Promise with the processed data(the result from the activateUser function).If the callback execution ended up with an error, the resulting promise should also be rejected with this error.
// getAndActivateUser accepts callbacks getUser and activateUser, and returns a Promise with the activated retrieved user data.If either callback execution ended up with an error, the resulting promise should also be rejected with this error.
const callback = (error, response) => {
    return () => {
        if (error) {
            throw Error(error)
        } else {
            return response;
        }
    }
}

function getUserPromise(getUser) {
    return new Promise(async (res, rej) => {
        let data;
        try {
            data = await getUser(callback);
        } catch (err) {
            return rej(err);
        };
        return res(data);
    })
}

function activateUserPromise(activateUser, data) {
    return new Promise(async (res, rej) => {
        let newData;
        try {
            newData = await activateUser(data, callback);
        } catch (err) {
            return rej(err);
        };
        return res(newData);
    })

}

function getAndActivateUser(getUser, activateUser) {
    return new Promise((res, rej) => {
       return getUserPromise(getUser)
        .then(data => activ)
    })
}
// function getAndActivateUser(getUser, activateUser) {
//     return new Promise(async (res, rej) => {
//         let data;
//         try {
//             data = await getUser(callback);
//             data = await activateUser(data, callback);
//         } catch (err) {
//             return rej(err);
//         };
//         return res(data);
//     })
// }

module.exports = { getUserPromise, activateUserPromise, getAndActivateUser };









const callback = (error, response) => {
    return () => {
        if (error) {
            throw error;
        } else {
            return response;
        }
    }
}

function getUserPromise(getUser) {
    return new Promise((res, rej) => {
        let data;
        try {
            data = getUser(callback);
        } catch (err) {
            return rej(err);
        };
        return res(data);
    })
}

function activateUserPromise(activateUser, data) {
    return new Promise((res, rej) => {
        let newData;
        try {
            newData = activateUser(data, callback);
            debugger
        } catch (err) {
            return rej(err);
        };
        return res(newData);
    })

}

function getAndActivateUser(getUser, activateUser) {
    return new Promise((res, rej) => {
        return getUserPromise(getUser)
            .then(data => activateUserPromise(activateUser, data))
            .then(result => { console.log(result); res(result) })
            .catch(err => rej(err))
    })
}

const getUser = (callback) => {
    setTimeout(callback(undefined, 'resolve part'), 300);
};
const activateUser = (data, callback) => {
    callback(undefined, data + ' works perfect');
};

const promise = getAndActivateUser(getUser, activateUser);
return promise.then(value => {
    console.log(value === 'resolve part works perfect');
});








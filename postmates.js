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
            .then(result => {console.log(result);res(result)})
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
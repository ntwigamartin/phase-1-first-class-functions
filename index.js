function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function newFunc() {

    }
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}
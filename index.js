function receivesAFunction(callback){

    return callback()
}

receivesAFunction(function () {return "returned function"})

function returnsANamedFunction(){
    return function newFunction(){
        console.log("F")
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("Hello, World");
      };
}


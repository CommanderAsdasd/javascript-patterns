var obj = {
    myprop: 'myvalue'
};

var obj2 = {
    myprop: 'my_value'
};

obj === obj2; // false
obj == obj2; //false

var uni = new Universe();
var uni2 = new Universe();
uni === uni2; //true 

function Universe() {

    //do we have an existing instance?
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }
    
    //proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    
    //cache
    Universe.instance = this;
    
    //implicit return
    //return this
}

//test


/* Closure realisation */
function Universe() {
    var instance = this;
    
    this.start_time = 0;
    this.bang = "Big";

    //rewrite Constructor 
    Universe = function() {
        return instance;
    };
}




//immediate function example

var Universe;

(function () {
    
    var instance;

    Universe = function Universe() {

        if (instance) {
            return instance;
        }

        instance = this;

        //functionality
        this.start_time = 0;
        this.bang = "Big"
    };
}());

//для чего предназначена операция delete
//localstorage и 
//что делает метод pop
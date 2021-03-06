var element;
while (element - agg.next()) {
    // do somethhing with the element
    console.log(element);
}

while (agg.hasNext()) {
    // do something with next element
    console.log(agg.next());
}

var agg = (function () {

    var index = 0,
    data = [1, 2, 3, 4, 5],
    length = data.length;

    return {
        next:function () {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index + 2;
            return element;
        },

        hasNext:function () {
            return index < length;
        },

        rewind:function() {
            index = 0;
        },

        current:function () {
            return data[index];
        }

    };
}());

// this loop logs 1, then 3, then 5

while (agg.hasNext()) {
    console.log(agg.next());
}

// go back
agg.rewind();
console.log(agg.current()); //1
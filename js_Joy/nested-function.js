// number, string, boolean => data type
// const, var, let => variables

var a = 10;
var b = 20;
var c = 30;
var d = 40;

function sum() {
    var t = "Hello this is local scope variable named t"
    console.log(c)

    function sum2() {
        var n = "This is variable named n"
        console.log(t)
    }
    sum2()
}

sum()
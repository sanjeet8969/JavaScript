//function statement
function a()
{
    console.log("hello a");
}
a();

//function expression

var b=function(){
    console.log("hello b");
}
b();

//Named function

var c=function xyz()
{
    console.log("hello c");
}
c();

// First Class Function

var d=function(para1)
{
    console.log(para1);
}
function xyz()
{
    console.log("a");
}
d(xyz);
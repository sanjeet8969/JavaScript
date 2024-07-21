function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }se
    return y;
}
var z=x();
console.log(z)
//...................

z();
function x() {
    
    for (var i = 1; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        },i * 1000)
    }

    console.log("namaste javascript");
}
x();
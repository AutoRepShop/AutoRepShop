function onResize() {
    var width = window.innerWidth;
    var resWidth = window.screen.availWidth;

    var result = 2.2;

    function resize() {
        console.log(window.innerWidth);

        if (width > resWidth * 0.75) {
            result = 1.3;
        } else if (width < resWidth * 0.75 && width > resWidth * 0.5) {
            result = 1.8;
        } else {
            result = 2;
        }
    };

    window.onresize = setInterval(resize(), 300);

    return result;
}
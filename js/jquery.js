/*      jquery      */

$(document).ready(function () {
    "use strict";

    // Nice Scroll
    $("body").niceScroll({
        cursorcolor: "#2196f3",
        cursorwidth: "18px",
        zindex: "99999",
        cursorborder: "0",
        cursorborderradius: "0%",
    });

    // Loading Screen
    $(".lod .lds-dual-ring").fadeOut(1500, function () {
        $(this)
            .parent()
            .fadeOut(600, function () {
                $(this).remove();
            });
    });
});

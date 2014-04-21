$(document).ready(function () {
    init();
});

function init() {
    var noOfBox = 26;
    createGrid(noOfBox);
    updateGrid();
    $("button").on("click", updateGrid);
}

function createGrid(noOfBox) {
    var sideOfBox = parseInt($("#grid-container").css("width"), 10) / noOfBox + "px";

    for (var i = 0; i < noOfBox * noOfBox; i++) {
        $("#grid-container").append("<div class='grid-box'></div>");
    }
    $(".grid-box").css({
        width: sideOfBox,
        height: sideOfBox,
        background: "gray"
    });

}

function updateGrid() {
    var color, option = this.className;

    switch (option) {
        case "random":
            clear();
            $(".grid-box").on("mouseenter", function () {
                $(this).css("background", getRandomColor);
            });
            break;
        case "opacity":
            clear();
            $(".grid-box").on("mouseenter", function () {
                $(this).css("opacity", $(this).css("opacity") * 0.75);
            });
            break;
        case "trail":
            clear();
            $(".grid-box").hover(function(){$(this).css("opacity", 0);}, function(){$(this).fadeTo("slow", 1);});
            break;
        case "clear":
            clearSlate();
            break;
        default:
            $(".grid-box").on("mouseenter", function () {
                $(this).css("background", "black");
            });
            break;
    }

}

function clear() {
    $(".grid-box").unbind().css({
        background: "gray",
        opacity: 1
    });

}

function clearSlate() {
    $(".grid-box").css({
        background: "gray",
        opacity: 1
    });

}

function getRandomColor() {
    var r, g, b;
    r = Math.ceil(Math.random() * 255);
    g = Math.ceil(Math.random() * 255);
    b = Math.ceil(Math.random() * 255);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}
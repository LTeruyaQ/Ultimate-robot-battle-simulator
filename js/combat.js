function combat (x1, y1, x2, y2 ){

    //A área das naves de 25x25 px é de 625px no total


    // console.log(x1, y1, x2, y2);
    //     if((x1 + 24) == (x2 + 24) && (y1 + 24)  == (y2 + 24)
    //         ||
    //         (x1 - 26) <= (x2 - 26) && (y1 - 26)  <= (y2 - 26)
    //         ||
    //         (x1 + 24) <= (x2 - 26) && (y1 + 24)  <= (y2 - 26)
    //         ||
    //         (x1 - 26) <= (x2 + 24) && (y1 - 26)  <= (y2 + 24)
    //        ||
    //         (x1 - 26) <= (x2 + 24) && (y1 + 24)  <= (y2 - 26)
    //         ||
    //         (x1 + 24) <= (x2 - 26) && (y1 - 26)  <= (y2 + 24)
    //         ||
    //         (x1 + 24) >= (x2 + 24) && (y1 + 24)  >= (y2 + 24)
    //         ||
    //        (x1 - 26) >= (x2 - 26) && (y1 - 26)  >= (y2 - 26)
    //         ||
    //         (x1 + 24) >= (x2 - 26) && (y1 + 24)  >= (y2 - 26)
    //         ||
    //         (x1 - 26) >= (x2 + 24) && (y1 - 26)  >= (y2 + 24)
    //         ||
    //        (x1 - 26) >= (x2 + 24) && (y1 + 24)  >= (y2 - 26)
    //         ||
    //         (x1 + 24) >= (x2 - 26) && (y1 - 26)  >= (y2 + 24)
    //         )
    //         {
    //             alert("PARO PARO PARO");
    //         }


    var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}


};
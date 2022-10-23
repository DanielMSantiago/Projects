
//click and deals five random cards at once
$(document).ready(function(){
    $("#deal").click(function () {
        for(let i = 0; i < 5; i++){
            dealCard(randomCard());
            removeCard(i);
            init();
            
        }
        //drag and drop
        function init() {
            $(".draggableIMG").draggable({
            cursor: "move"
            });
            $( ".discard" ).droppable({
                drop: handleDropEvent
            });   
        };    
    });
});  

var cardsInDeck = new Array();
var numberOfCardsInDeck = 67;
cardsInDeck[0] = "BJ";
cardsInDeck[1] = "C2";
cardsInDeck[2] = "C3";
cardsInDeck[3] = "C4";
cardsInDeck[4] = "C5";
cardsInDeck[5] = "C6";
cardsInDeck[6] = "C7";
cardsInDeck[7] = "C8";
cardsInDeck[8] = "C9";
cardsInDeck[9] = "C10";
cardsInDeck[10] = "CA";
cardsInDeck[11] = "CJ";
cardsInDeck[12] = "CJ2";
cardsInDeck[13] = "CK";
cardsInDeck[14] = "CK2";
cardsInDeck[15] = "CQ";
cardsInDeck[16] = "CQ2";
cardsInDeck[17] = "D2";
cardsInDeck[18] = "D3";
cardsInDeck[19] = "D4";
cardsInDeck[20] = "D5";
cardsInDeck[21] = "D6";
cardsInDeck[22] = "D7";
cardsInDeck[23] = "D8";
cardsInDeck[24] = "D9";
cardsInDeck[25] = "D10";
cardsInDeck[26] = "DA";
cardsInDeck[27] = "DJ";
cardsInDeck[28] = "DJ2";
cardsInDeck[29] = "DK";
cardsInDeck[30] = "DK2";
cardsInDeck[31] = "DQ";
cardsInDeck[32] = "DQ2";
cardsInDeck[33] = "H2";
cardsInDeck[34] = "H3";
cardsInDeck[35] = "H4";
cardsInDeck[36] = "H5";
cardsInDeck[37] = "H6";
cardsInDeck[38] = "H7";
cardsInDeck[39] = "H8";
cardsInDeck[40] = "H9";
cardsInDeck[41] = "H10";
cardsInDeck[42] = "HA";
cardsInDeck[43] = "HJ";
cardsInDeck[44] = "HJ2";
cardsInDeck[45] = "HK";
cardsInDeck[46] = "HK2";
cardsInDeck[47] = "HQ";
cardsInDeck[48] = "HQ2";
cardsInDeck[49] = "RJ";
cardsInDeck[50] = "S2";
cardsInDeck[51] = "S3";
cardsInDeck[52] = "S4";
cardsInDeck[53] = "S5";
cardsInDeck[54] = "S6";
cardsInDeck[55] = "S7";
cardsInDeck[56] = "S8";
cardsInDeck[57] = "S9";
cardsInDeck[58] = "S10";
cardsInDeck[59] = "SA";
cardsInDeck[60] = "SA2";
cardsInDeck[61] = "SJ";
cardsInDeck[62] = "SJ2";
cardsInDeck[63] = "SK";
cardsInDeck[64] = "SK2";
cardsInDeck[65] = "SQ";
cardsInDeck[66] = "SQ2";


let dealCard = (i) => {
    if (numberOfCardsInDeck == 0) return false;
    var img = document.createElement("img");
    img.src = "PNG-cards-1.3/" + cardsInDeck[i] + ".png";
    img.setAttribute('class', 'draggableIMG');
    
    //adds img to draggable div
    document.getElementById("draggable").appendChild(img);
}

//removes image when dropped in div "discard"
let handleDropEvent = ( event, ui ) => {
    var draggable = ui.draggable;
    draggable.remove();  
  }
  

let randomCard = () => {
   return Math.floor(Math.random() * numberOfCardsInDeck);  
}

let removeCard = (c) => {

    // simply make every higher numbered card move down 1
    for (j=c; j <= numberOfCardsInDeck - 2; j++)
    {
        cardsInDeck[j] = cardsInDeck[j+1];
    }
    numberOfCardsInDeck--;  
};


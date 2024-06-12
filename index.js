
function showResult(){

    var yourname =document.querySelector("#name").value;
    yourname =yourname.toUpperCase();
    var lovername =document.querySelector("#lovername").value;
    lovername =lovername.toUpperCase();
    var randomnumber =Math.floor(Math.random() * 100) + 1;

    
    

    if(randomnumber <= 10  ) {
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. Thats too poor 💩, Say i love you to your lover today!" ;

    }



    else if( randomnumber >= 11 && randomnumber <= 20 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. hmmm warisdis 😈 Send your lover a love message today! " ;

    }

    else if( randomnumber >= 21 && randomnumber <= 30 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. Ewooooh 🤬 Oya dash your lover a Surprise Gift Today!" ;

    }
    else if( randomnumber >= 31 && randomnumber <= 40 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. See as i dey look U 🐵, Nawaa for You oooh" ;

    }
    

    else if( randomnumber >= 41 && randomnumber <= 50 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. 😉 For your Mind you dey try abi, Better Person"  ;

    }

    else if( randomnumber >= 51 && randomnumber <= 60 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. 🥰 Na love Go Kill You" ;

    }

    else if( randomnumber >= 61 && randomnumber <= 70 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. 😜 Pablo and Pablet 😋  " ;

    }
    else if( randomnumber >= 71 && randomnumber <= 80 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. 😘 Chairman lovers council, Come carry cup 💋" ;

    }
    else if( randomnumber >= 81 && randomnumber <= 90 ){
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. 💌 Honourable Minister of love Affairs 💕 " ;
    }
    else{
        var score =document.getElementById("score").innerHTML="HI! " + yourname + ", YOU LOVE " + lovername + " " + randomnumber + "% PERCENT. 💌 National president for  love Affairs 💕 " ;

    }
  
    document.querySelector("button").innerHTML="PLAY AGAIN!";
}



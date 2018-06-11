var x=0;
var count=0;
var image=document.getElementsByClassName("load");
var button=document.getElementById("button");
var check=document.getElementsByClassName("check");
var number=document.getElementsByClassName("playImg");
var play=document.getElementById("play");
var playArea=document.getElementById("playArea");
var background=document.getElementsByClassName("background");
var right=document.getElementById("right");
//click on start button function
button.addEventListener("click",playGame);
function playGame(){
    play.style.display="inline-block";
    playArea.style.display="flex";
    button.style.display="none";
    background[0].style.background="url(images/screen2-01.png)";

    // twzy3a el rkmyn ely fo2
    var num1=document.getElementById("num1");
    var num2=document.getElementById("num2");
    var random=Math.round(Math.random()*9);
    while(parseInt(image[random].id)>9){
        var random=Math.round(Math.random()*9);
    }
    var img=document.createElement("img");
    img.src=image[random].src;
    img.id=image[random].id;
    console.log(img.id,img);
    img.className="check";
    num1.appendChild(img);
    console.log(image[random]);
    // image[random].remove();
    var random=Math.round(Math.random()*9);
    while(parseInt(image[random].id)>9){
        var random=Math.round(Math.random()*9);
    }
    var img=document.createElement("img");
    img.src=image[random].src;
    img.id=image[random].id;
    console.log(img.id ,img);
    img.className="check";
    num2.appendChild(img);
    // image[random].remove();
    console.log("check",check, check.length);
 
    // debugger;
    console.log("before",image.length);
    // twzy3a el answer fl awl
    if(x==0){
        var answer=document.createElement("img");
        var div=document.createElement("div");
        div.className="num";
        var id=(parseInt(check[0].id))+(parseInt(check[1].id));
        console.log(id);
        var answerId=document.getElementById(id);
        console.log(answerId)
        answer.src=answerId.src;
        answer.id=answerId.id;
        answer.className="playImg";
        div.appendChild(answer);
        playArea.appendChild(div);
        x=1;
        randomNumber();
    }

    else if(x==1){
        // twzy3a el answer fl a5r
        randomNumber();
        var answer=document.createElement("img");
        var div=document.createElement("div");
        div.className="num";
        var id=(parseInt(check[0].id))+(parseInt(check[1].id));
        console.log("awl",parseInt(check[0].id),"tany",parseInt(check[1].id));
        console.log(id);
        var answerId=document.getElementById(id);
        console.log(answerId)
        answer.src=answerId.src;
        answer.id=answerId.id;
        answer.className="playImg";
        div.appendChild(answer);
        playArea.appendChild(div);
        x=0;
    }
 console.log("after",image.length);

    // twzy3a ba2y el arkam
    function randomNumber(){
        for(var i=0;i<3;i++){
            var random=Math.round(Math.random()*(image.length-1));
            var img=document.createElement("img");
            var div=document.createElement("div");
            div.className="num";
            img.src=image[random].src;
            img.id=image[random].id;
            img.className="playImg";
            div.appendChild(img);
            playArea.appendChild(div);
            // image[random].remove();
        } 
    }

    for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        if (parseInt(this.id)==(parseInt(check[0].id)+parseInt(check[1].id))){
            var newImg=document.createElement("img");
            newImg.src=this.src;
            newImg.id=this.id;
            play.appendChild(newImg);
            this.remove();
            debugger;
            console.log(number.length);
            setTimeout(function(){
                right.style.display="inline";
            },500);
            if(number.length==3){
                setTimeout(function(){
                    playAgain(newImg);
                },1500);
            }
        }
        else{
            wrong.style.display="inline";
            setTimeout(function(){
                wrong.style.display="none";
            },700);
        }
    })
    }
}


function playAgain(z){
    count++;
    right.style.display="none";
    var y =document.getElementsByClassName("num");
    for(i=check.length-1;i>=0;i--){
        check[i].remove();
    }
    for(i=3;i>=0;i--){
        y[i].remove();
    }
    z.style.display="none";
    if(count<=7){
        playGame();
    }
    else{
        play.style.display="none";
        playArea.style.display="none"; 
        background[0].style.backgroundImage="url(images/el-equipo-de-negocios-ganador-se-coloca-en-el-podio_35695-1.jpg)";
        background[0].style.backgroundSize="contain";
        background[0].style.backgroundRepeat="no-repeat";
        background[0].style.backgroundPosition="center";
        background[0].style.backgroundColor="#91c6b4";
        button.style.display="inline";
        button.style.bottom="12%";
        button.style.backgroundColor="#f9f75d";
        button.style.color="#2D7530";
        count=0;
        button.innerText="Play Again";
    }
 
}
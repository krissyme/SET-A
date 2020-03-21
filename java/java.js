function changeColor(){
    var color = document.getElementById("select");
    var backgColor = color.options[color.selectedIndex].value;
    document.getElementById("motor").style.backgroundColor = backgColor;
}

function colorChanger(){
    //var genColor = Math.floor(Math.random()*255);
    //document.getElementById("body").style.backgroundColor = "#" + genColor;

    var x = Math.floor(Math.random()*255);
    var y = Math.floor(Math.random()*255);
    var z = Math.floor(Math.random()*255);
    var bgcolor = "rgb("+ x +","+ y +"," + z +")";
    document.getElementById("motor").style.background = bgcolor ;

   
}
 function reset(){
     document.getElementById("motor").style.backgroundColor = "white";
 }
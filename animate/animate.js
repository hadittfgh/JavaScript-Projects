function Move(){
    console.log("In Move");
    var pos=0
    var childe = document.getElementById("childe");
    var childe2 = document.getElementById("childe2");
    var status = setInterval(move1,5);
    function move1(){
        console.log(pos);
        if(pos == 450){
            clearInterval(status);
            var status2 = setInterval(move2,5);
            function move2(){
                console.log(pos);
                if(pos == 0){
                    clearInterval(status2);
                    var status = setInterval(move1,5);
                }else{
                    pos --;
                    childe.style.top = pos+"px";
                    childe.style.left = pos+"px";
                    childe2.style.top = pos+"px";
                    childe2.style.right = pos+"px";
                 }
            }
        }else{
            pos ++;
            childe.style.top = pos+"px";
            childe.style.left = pos+"px";
            childe2.style.top = pos+"px";
            childe2.style.right = pos+"px";
         }
    }
}
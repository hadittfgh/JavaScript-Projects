var request ;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XMLHttp");
}
request.open("GET","info.txt",true);
request.onreadystatechange = function(){
    if ((request.status === 200) && (request.readyState === 4)){
        console.log(request);
        var para = document.getElementById("para");
        para.innerHTML = request.responseText;
    }else{
        console.log("Error");
    }
}
request.send();
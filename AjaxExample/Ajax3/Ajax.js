var request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XLMHttp");
}
request.open("GET","data.json",true);
request.onreadystatechange = function(){
    var modify = document.getElementById("modify");
    if((request.status === 200) && (request.readyState === 4)){
        var items = JSON.parse(request.responseText);
        var output = "<ul>";
        for (i in items){
            output += "<li>"+ items[i].name +"</li>"
        }
        output += "</ul>";
    }else{
        console.log("Error");
    }
    modify.innerHTML = output;
}
request.send();
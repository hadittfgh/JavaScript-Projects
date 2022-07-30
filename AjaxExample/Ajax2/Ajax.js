var request;
if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}else{
    request = new ActiveXObject("Microsoft.XLMHttp");
}
request.open("GET","data.xml",true);
request.onreadystatechange = function(){
    var modify = document.getElementById("modify");
    if((request.status === 200) && (request.readyState === 4)){
        var items = request.responseXML.getElementsByTagName("name");
        var output = "<ul>";
        for(var i=0; i < items.length; i++){
            output += "<li>" + items[i].firstChild.nodeValue + "</li>";
        }
        output += "</ul>";
    }else{
        console.log("Error");
    }
    modify.innerHTML = output;
}
request.send();
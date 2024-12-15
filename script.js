function additem(){
    let item=document.getElementById("box");
    let listitem=document.getElementById("list-item");
if(item.value!=""){
    let makelist=document.createElement("li");
    makelist.appendChild(document.createTextNode(item.value));
    listitem.appendChild(makelist);
    item.value="";
    makelist.onclick=function(){
        this.parentNode.removeChild(this);
        
    }
    
    }
    else
    {
        alert("Please add text")
    }

}
function getTarget(e){  //Declare a function
if(!e){
    e = window.event; //if there is no event object 
}                      // use ond iE event object

return e.getTarget || e.srcElement  //get the target of event


}


function itemDone(e){  //decalre a function

    //remove item from the list

    let target, eleParent, elGrandparent;

    target = getTarget(e);
    eleParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(eleParent);


}

//set up the event listener to call itemDone() on click


let el = document.getElementById("ShoppingList");

if(el.addEventListener){
    el.addEventListener('click', function(){
        itemDone();
    },false)
}else{
    el.attachEvent('onclick', function(){
        itemDone();
    })
}


const create=document.querySelector("#create"); //var qui stoque element html
const clear=document.querySelector("#clear");
const input=document.querySelector("#input");
const select=document.querySelector("#ul");


create.addEventListener("click",function(call){ 
    const stock=document.createElement("li"); // li -> ul
    stock.textContent = input.value   // stock contiens des variables qui modifie  
    select.append(stock)
    stock.addEventListener("click",function(barre){ //pour barrer
        stock.classList.toggle("classbar") //toggle prend class si il a la class - / si il a pas ++
    })
})

clear.addEventListener("click",function(suprr){
    const sup=document.querySelectorAll(".classbar");
    sup.forEach(function(coco){ ////foreach va donner une valeur a cette variable
        coco.remove() 
    }) 
})

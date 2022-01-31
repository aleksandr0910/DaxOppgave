
    let navn = document.getElementById("søkefelt");
    let takkefelt = document.getElementById("takkefelt");
function navninput(){
    takkefelt.innerHTML = "takk for at du besøkte denne siden " + navn.value ;
    localStorage.setItem("name", navn.value)
    
}

function lykketall(){
    let lykke = Math.floor(Math.random()*300)
    let tallet = document.getElementById("tallET") 
    tallet.innerHTML = "ditt lykketall er " + lykke;

}
lykketall();

function lokallagring(){
    let lokal = document.getElementById("test");
    lokal.innerHTML = localStorage.getItem("name", navn.value); 
    
}
lokallagring();

function babymaker(){
   
    const para = document.createElement("p");
    para.innerHTML = navn.value;
    document.querySelector("fieldset").appendChild(para);
    
}
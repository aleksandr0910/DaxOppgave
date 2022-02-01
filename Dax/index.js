
    let navn = document.getElementById("søkefelt");
    let takkefelt = document.getElementById("takkefelt");
    let navner = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : 
    localStorage.setItem("names", "[]") || [];
function navninput(){
    takkefelt.innerHTML = "Takk for at du besøkte denne siden " + navn.value ;
    
    navner.push(navn.value)
    localStorage.setItem("names", JSON.stringify(navner))

    localStorage.setItem("name", navn.value)
    
}

function lykketall(){
    let lykke = Math.floor(Math.random()*300)
    let tallet = document.getElementById("tallET") 
    tallet.innerHTML = "ditt lykketall er " + lykke;
  

}

function lokallagring(){
    let lokal = document.getElementById("test");
    lokal.innerHTML = localStorage.getItem("name", navn.value);
    
}
lokallagring();

function pmaker(){
    document.querySelector("#tidligere-besøkende").innerHTML = navner.join("<br>");
    navn.value="";
}
pmaker();


setTimeout(() => {
    lykketall()
    setInterval(() => { 
    }, 60 * 1000);
  }, (60 - new Date().getSeconds()) * 1000);
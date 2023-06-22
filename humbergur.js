let humbuger=document.querySelector(".humbuger");
let menu_bar=document.querySelector(".menu_bar");
let log1=document.querySelector(".log1");
let sidebar=document.querySelector(".sidebar");


humbuger.onclick = function(){
    humbuger.classList.toggle("active")
    menu_bar.classList.toggle("active")
}

log1.onclick = function(){
    sidebar.classList.toggle("active")
}


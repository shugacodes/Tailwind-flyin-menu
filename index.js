// let icons = document.querySelectorAll(".fa-solid");
// let menuCards = document.querySelectorAll(".fly-in-menu");


// function defaultIcon(){
//     menuCards.forEach((item) => {
//         item.classList.remove("fly-in-menu-new");
//         item.classList.add("fly-in-menu");
//     })

// }

// icons.forEach((item, index) =>{
//     item.addEventListener("click", function(){
//         let menuCard = menuCards[index];

//         defaultIcon();

//         if(menuCard.classList.contains("fly-in-menu")){
//                      menuCard.classList.remove("fly-in-menu");
//                      menuCard.classList.add("fly-in-menu-new");
//                  }else if(menuCard.classList.contains("fly-in-menu-new")){
//                      menuCard.classList.remove("fly-in-menu-new");
//                      menuCard.classList.add("fly-in-menu");
//                }

//     })
// })






















let menuCard1 = document.getElementById("flyIn1");
let menuCard2 = document.getElementById("flyIn2");
let menuCard3 = document.getElementById("flyIn3");
let menuCard4 = document.getElementById("flyIn4");
let menuCard5 = document.getElementById("flyIn5");
let menuCard6 = document.getElementById("flyIn6");

let icon = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");
let icon6 = document.getElementById("icon6");



icon.addEventListener("click", function(){
    if(menuCard1.classList.contains("fly-in-menu")){
        menuCard1.classList.remove("fly-in-menu")
        menuCard.classList.add("fly-in-menu-new")
    }else if(menuCard1.classList.contains("fly-in-menu-new")){
        menuCard1.classList.remove("fly-in-menu-new")
        menuCard1.classList.add("fly-in-menu")
    }
})



function addFlyInMenu(flyInMenu, mainIcon){
    mainIcon.addEventListener("click", function(){
        if(flyInMenu.classList.contains("fly-in-menu")){
            flyInMenu.classList.remove("fly-in-menu")
            flyInMenu.classList.add("fly-in-menu-new")
        }else if(flyInMenu.classList.contains("fly-in-menu-new")){
            flyInMenu.classList.remove("fly-in-menu-new")
            flyInMenu.classList.add("fly-in-menu")
        }
    })
}

addFlyInMenu(menuCard1, icon);
addFlyInMenu(menuCard2, icon2)
addFlyInMenu(menuCard3, icon3);
addFlyInMenu(menuCard4, icon4);
addFlyInMenu(menuCard5, icon5);
addFlyInMenu(menuCard6, icon6);
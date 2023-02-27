// alert("JS connected");

// var name, phone = null;
// if (confirm("We're collecting cookie do You want continue?")){
	
// 	person = prompt("Enter your Name:");
// 	phone = prompt("Enter your phone number:")
// 	alert("Welcome to our universe" + Name);
// }
// document.querySelector('.btnn').onclick = function(){
// 	alert("Nice")
// }

// btnn = document.querySelector(".btnn");
// btnn.onclick = function(){
// 	this.innerHTML = '<div class="loader"></div>';
// 	setTimeout(() => {
// 		this.innerHTML = "Thank you❤️";
// 	},2000);
// }


let switchMode = document.getElementById("switchMode");
switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "E:/WEB/assets/css/light_theme.css"){
        theme.href = "E:/WEB/assets/css/style.css";
    } else{
        theme.href = "E:/WEB/assets/css/light_theme.css"
    }
}
let switchMode2 = document.getElementById("switchMode2");
switchMode2.onclick = function () {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "E:/WEB/assets/css/style.css"){
        theme.href = "E:/WEB/assets/css/light_theme.css";
    } 
    else{
        theme.href = "E:/WEB/assets/css/style.css"
    }
}
// Получить модальный
let popupBG = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.button');
let closePopupButton = document.querySelector('.close');
openPopupButtons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBG.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBG.classList.remove('active');
    popup.classList.remove('active');
})
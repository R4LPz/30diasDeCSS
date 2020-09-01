var button = document.querySelector(".hamburguer")

console.log(button)

button.addEventListener("click",()=>{
    button.classList.toggle("active")
})
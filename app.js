const humburger = document.querySelector("#humberger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLiinks = document.querySelectorAll("#hLink")




humburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")
})

hLiinks.forEach(link=>{
    
link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")
   })
})

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
   
})
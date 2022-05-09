let storage = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','@','#','$','%','^','&','*']
let oneEl = document.getElementById("pass-one")
let twoEl = document.getElementById("pass-two")
let threeEl = document.getElementById("pass-three")
let fourEl = document.getElementById("pass-four")
let buttonEl = document.getElementById("generate-pass")
let valueEl = document.getElementById("value-el")
let valCont = 0


buttonEl.addEventListener("click", function () {
    let valCont = valueEl.value
    oneEl.textContent =  generate(valCont) 
   twoEl.textContent =  generate(valCont) 
   threeEl.textContent =  generate(valCont) 
   fourEl.textContent =  generate(valCont)
   
   valueEl.value = " "
    
})

function generate(input) {
    let a =  input
    let string = ""
     for (let i = 0; i < a; i++) {
      let b = storage[Math.floor(Math.random() * storage.length)] 
    string += b

}
return string
}



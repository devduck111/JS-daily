let element = document.getElementById('sketch-container')
let isPressed = false
element.addEventListener('mousedown',()=>{isPressed = true})
element.addEventListener('mouseup',()=>{isPressed=false})
element.addEventListener('mousemove',(e)=>{isPressed? e.target.style.backgroundColor='cyan': e.target.style.backgroundColor='white'})
for(let i =0; i<12932 ; i++){
    element.appendChild(document.createElement('div'))
}
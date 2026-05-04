// expanding projects
const panels =document.querySelectorAll('.panel')

console.log(panels)
panels.forEach((panel)=> {
    panel.addEventListener('mouseover', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses (){
    panels.forEach(function(panel){
        panel.classList.remove('active')
    })
}

// scroll animaton
const boxes = document.querySelectorAll('.card')

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes(){
    const triggerBottom = window.innerHeight /5 * 4.5

    boxes.forEach(box => {
        const boxTop =box.getBoundingClientRect().top
        
        if (boxTop< triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

// nav minimize on scroll
const minimize = document.getElementById('navbar')
console.log(minimize)
window.addEventListener('scroll', fixNav)


function fixNav(){
    if(window.scrollY>minimize.offsetHeight+150){
        minimize.classList.add('active')
    }else{
        minimize.classList.remove('active')
    }

}

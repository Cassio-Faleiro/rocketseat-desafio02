const modalOverlay = document.querySelector('.modal-overlay')
const course = document.querySelectorAll('.courseStarter, .courseLaunchBase, .courseGoStack')  
const modalMaximize = document.querySelector('.modal')
const maxiModal = document.querySelector('.maximize-modal')

for (let courses of course){
    courses.addEventListener("click", function(){
        const id_Site = courses.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${id_Site}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalMaximize.classList.remove('maximize')  
    

})

maxiModal.addEventListener("click", function(){  
        if(modalMaximize.classList.contains('maximize') === false){
            modalMaximize.classList.add('maximize')
            
        }else if (modalMaximize.classList.contains('maximize') === true){
            modalMaximize.classList.remove('maximize')
            
        }
})






/*
    
const cursor = document.querySelectorAll('.maximize-modal')


    for(let cursors of cursor){
    cursors.addEventListener("click", function(){
        modalMaximize.classList.add('maximize')
    })
}



document.querySelector('.maximize-modal').addEventListener("click", function(){
    
})
*/





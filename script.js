const panels = document.querySelectorAll('.panel')


function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function panelClicks(){
    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
        })
    })
}

panelClicks()


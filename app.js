const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.Controls');
const sectBtn = document.querySelectorAll('.Control');
const allSections = document.querySelector('.main-content');


function SectionTransitions(){
    /*Button clicked active class*/
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let activeBtn = document.querySelector('.active-btn');
            if (activeBtn !== null) {
                activeBtn.classList.remove('active-btn');
            }
            this.className += ' active-btn';
        })
    }
    /*Active Sections*/
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            /*remove selected from other buttons*/
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            /*hide other sections*/
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    /*Toggle theme*/
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

SectionTransitions();
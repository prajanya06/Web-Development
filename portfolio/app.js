const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controls');
const sectbtn = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function PageTransition(){
    for(let i=0; i<sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function(){
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    allsections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            sectbtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    const themebtn = document.querySelector('.theme-btn');
    themebtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransition();
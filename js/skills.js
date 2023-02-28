(function(){
    const titleSkills = [...document.querySelectorAll('.skills__title')];
    console.log(titleSkills)

    titleSkills.forEach(skill => {
        skill.addEventListener('click', ()=>{

             let height = 0;
             let show = skill.nextElementSibling; 
             let addPadding = skill.parentElement.parentElement;

             addPadding.classList.toggle('skills__padding--add');
             skill.children[0].classList.toggle('skills__arrow--rotate');
            
             if(show.clientHeight === 0){
                height = show.scrollHeight;

             }
             show.style.height = `${height}px`;
        });
    });
})();
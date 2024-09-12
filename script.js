const skills = document.getElementById('technical-skills')


const button = document.getElementById('toggle-skills') 



button.addEventListener('click', () => {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    }else {
        skills.style.display = 'none'
    }
}) 



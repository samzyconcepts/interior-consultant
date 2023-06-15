document.querySelector('.toggle').addEventListener('click', ()=>{
    const navList = document.querySelector('.nav');
    document.querySelector('.bx-menu').classList.toggle('hidden')
    document.querySelector('.bx-x').classList.toggle('hidden')

    navList.classList.toggle('hidden')
    navList.classList.toggle('flex')
})
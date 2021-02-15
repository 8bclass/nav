const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {

        //Toggle Nav

        nav.classList.toggle('nav-active')

        //Animate Links

        navLinks.forEach((link,index) => {
            if (link.style.animation){
                link.style.animation = ""
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })

        //Burger Animation

        burger.classList.toggle('toggle')
    })

}

navSlide()

function active(){
    var search = document.querySelector('.search .input').value

    if(search == 'Հանրահաշիվ'){
        alert('Հանրահաշիվ')
    }
    else if(search == ''){
        document.querySelector('.search .fill').style.visibility = 'visible'
        document.querySelector('.search .not-exist').style.visibility = 'hidden'
        document.querySelector('.search .not-exist2').style.visibility = 'hidden'
    }
    else{
        document.querySelector('.search .fill').style.visibility = 'hidden'
        document.querySelector('.search .not-exist').style.visibility = 'visible'
        document.querySelector('.search .not-exist2').style.visibility = 'visible'
    }
}

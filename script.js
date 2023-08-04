function closeMenu(){
    document.getElementById('checkbox').checked = false;
}

window.addEventListener('DOMContentLoaded',function(){
    let anchorSelector = 'a[href^="#"]';
    let anchorList = document.querySelectorAll(anchorSelector);

    anchorList.forEach(link => {
        link.addEventListener('click', function(){
            closeMenu();
            let destination = document.querySelector(this.hash);
            destination.scrollIntoView({
                behavior:'smooth'
            })
        })
    })
})
// initialize AOS
AOS.init({
    offset:300,
    duration:1000,
});
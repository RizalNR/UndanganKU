let menu_btn = document.getElementById("menu_btn")
let menu_container = document.getElementById("menu_container")
let showMenu = false


menu_btn.addEventListener("click", ()=>{

    if (showMenu == false){
        menu_container.style.animation = "slideIn 500ms" 
        menu_container.style.transform = "translateX(0%)"      
    } 
    else 
    {
        menu_container.style.animation = "slideOut 500ms"
        menu_container.style.transform = "translateX(100%)"      

    }

    showMenu = !showMenu

})

//ucapan.js
document.addEventListener('DOMContentLoaded', function() {
    const greetingForm = document.getElementById('greetingForm');
    const greetingResult = document.getElementById('greetingResult');

    greetingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Ambil data formulir
        const fullname = document.getElementById('fullname').value;
        const message = document.getElementById('message').value;

        // Tampilkan ucapan
        const greetingText = `Terima kasih, ${fullname}! Ucapan Anda: "${message}"`;
        greetingResult.innerHTML = greetingText;
        greetingResult.style.display = 'block';

        // Kosongkan formulir
        greetingForm.reset();
    });
});

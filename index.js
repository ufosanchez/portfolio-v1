window.onload = pageReady;

function pageReady(){
    var openToggle = document.getElementById("open_Toggle");
    var closeToggle = document.getElementById("close_Toggle");
    var menuToggle = document.getElementById("hiddenMenu");

    openToggle.onclick = open
    closeToggle.onclick = close

    function open(){

        openToggle.classList.remove("toggle") /* remove - display: block */
        openToggle.classList.add("toggle_close") /* add - display: none */

        closeToggle.classList.remove("close-toggle") /* remove - display: none (hide)*/
        closeToggle.classList.add("toggle_show") /* add - display: block (show the cross) */

        menuToggle.classList.remove("close-toggle")
        menuToggle.classList.add("toggle_show")
    }

    function close(){

        openToggle.classList.add("toggle") /* remove - display: block */
        openToggle.classList.remove("toggle_close") /* add - display: none */

        closeToggle.classList.add("close-toggle") /* remove - display: none (hide)*/
        closeToggle.classList.remove("toggle_show") /* add - display: block (show the cross) */

        menuToggle.classList.add("close-toggle")
        menuToggle.classList.remove("toggle_show")
    }

    window.addEventListener('resize', size)

    function size(){
        if(window.innerWidth>768){
            openToggle.classList.add("toggle") 
            openToggle.classList.remove("toggle_close") 

            closeToggle.classList.add("close-toggle") 
            closeToggle.classList.remove("toggle_show") 

            menuToggle.classList.add("close-toggle")
            menuToggle.classList.remove("toggle_show")
        }
    }
}
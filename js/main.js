const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
};



function scrollToTop() {

window.scrollTo({top: 0, behavior: 'smooth'});

}	
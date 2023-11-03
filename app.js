let sidebar = document.querySelector(".sidebar .toggle-btn")


sidebar.addEventListener("click", ()=> {
    document.querySelector(".sidebar").classList.toggle("active");
})
const alertBanner = document.getElementById("alert");
alertBanner.addEventListener('click', e => {

    const element= e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none"
    }
    });

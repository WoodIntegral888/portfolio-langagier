function afficher(descrip, pic) {
    let x = document.getElementById(descrip);
    let y = document.getElementById(pic);

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.opacity = "0.1";
    } 
    else {
        x.style.display = "none";
        y.style.opacity = "0.5";
    }
}



let charge = document.getElementById("charger");

window.addEventListener('DOMContentLoaded', () => {
    if (charge) {
        console.log("Element found:", charge);
        window.setTimeout(() => {
            charge.classList.add('fade');
            console.log("Class 'fade' added.");
        }, 1000);
    } else {
        console.error("Element with id 'charger' not found.");
    }
});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Close menu after clicking

document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });


// ==============================
// DEMO IoT DATA
// ==============================

const temp =
    document.getElementById("temperature");

const humidity =
    document.getElementById("humidity");

const heroTemp =
    document.getElementById("heroTemp");


function updateSensorData() {

    const temperature =
        (12 + Math.random() * 3)
        .toFixed(1);

    const hum =
        Math.floor(
            80 + Math.random() * 11
        );


    if (temp)
        temp.textContent =
            temperature + "°C";


    if (humidity)
        humidity.textContent =
            hum + "%";


    if (heroTemp)
        heroTemp.textContent =
            temperature + "°C";

}


setInterval(
    updateSensorData,
    3000
);


// ==============================
// PAGE LOAD MESSAGE
// ==============================

console.log(
    "Smart Cold Storage Project Website Loaded!"
);
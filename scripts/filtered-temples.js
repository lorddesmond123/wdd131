// ==========================================
// TEMPLE ARRAY
// ==========================================

const temples = [

    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Additional temple 1

    {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
        "https://temples.org/_vercel/image?q=75&url=%2Ftemples%2Fusa%2Futah%2Fsalt-lake-temple%2Fgallery%2Fblue-hour.jpg&w=1920"
},
    // Additional temple 2

  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
        "https://www.templedb.org/api/image-proxy?url=https%3A%2F%2Fwww.churchofjesuschrist.org%2Fimgs%2F7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca%2Ffull%2F1600%252C%2F0%2Fdefault"
},
    // Additional temple 3

    {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Johannesburg%20Temple%20from%20skyline.jpeg"
},
];


// ==========================================
// TEMPLE CONTAINER
// ==========================================

const templeContainer =
    document.querySelector("#temple-container");


// ==========================================
// DISPLAY TEMPLE CARDS
// ==========================================

function displayTemples(templeList) {

    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {

        // Create card
        const card = document.createElement("article");

        card.classList.add("temple-card");


        // ==================================
        // TEMPLE NAME
        // ==================================

        const name = document.createElement("h3");

        name.textContent = temple.templeName;


        // ==================================
        // LOCATION
        // ==================================

        const location = document.createElement("p");

        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;


        // ==================================
        // DEDICATED
        // ==================================

        const dedicated = document.createElement("p");

        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;


        // ==================================
        // AREA
        // ==================================

        const area = document.createElement("p");

        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;


        // ==================================
        // IMAGE
        // ==================================

        const image = document.createElement("img");

        image.src = temple.imageUrl;

        image.alt = `${temple.templeName} Temple`;

        // Native lazy loading
        image.loading = "lazy";


        // ==================================
        // ADD CONTENT TO CARD
        // ==================================

        // Writing first
        card.appendChild(name);

        card.appendChild(location);

        card.appendChild(dedicated);

        card.appendChild(area);


        // Image underneath writing
        card.appendChild(image);


        // Add card to container
        templeContainer.appendChild(card);

    });
}


// ==========================================
// HOME FILTER
// ==========================================

function showHome() {

    displayTemples(temples);

    document.querySelector("main h2").textContent =
        "Home";
}


// ==========================================
// OLD FILTER
// Before 1900
// ==========================================

function showOld() {

    const oldTemples = temples.filter((temple) => {

        const year =
            Number(temple.dedicated.split(",")[0]);

        return year < 1900;
    });

    displayTemples(oldTemples);

    document.querySelector("main h2").textContent =
        "Old Temples";
}


// ==========================================
// NEW FILTER
// After 2000
// ==========================================

function showNew() {

    const newTemples = temples.filter((temple) => {

        const year =
            Number(temple.dedicated.split(",")[0]);

        return year > 2000;
    });

    displayTemples(newTemples);

    document.querySelector("main h2").textContent =
        "New Temples";
}


// ==========================================
// LARGE FILTER
// Greater than 90,000 sq ft
// ==========================================

function showLarge() {

    const largeTemples = temples.filter((temple) => {

        return temple.area > 90000;
    });

    displayTemples(largeTemples);

    document.querySelector("main h2").textContent =
        "Large Temples";
}


// ==========================================
// SMALL FILTER
// Less than 10,000 sq ft
// ==========================================

function showSmall() {

    const smallTemples = temples.filter((temple) => {

        return temple.area < 10000;
    });

    displayTemples(smallTemples);

    document.querySelector("main h2").textContent =
        "Small Temples";
}


// ==========================================
// HAMBURGER MENU
// ==========================================

const menuButton =
    document.querySelector("#menu");

const navigation =
    document.querySelector("#navigation");


// ==========================================
// OPEN / CLOSE MENU
// ==========================================

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {

        menuButton.textContent = "✕";

        menuButton.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    } else {

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

});


// ==========================================
// CLOSE MENU FUNCTION
// ==========================================

function closeMenu() {

    navigation.classList.remove("open");

    menuButton.textContent = "☰";

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


// ==========================================
// NAVIGATION BUTTONS
// ==========================================

document.querySelector("#home")
    .addEventListener("click", (event) => {

        event.preventDefault();

        showHome();

        closeMenu();

    });


document.querySelector("#old")
    .addEventListener("click", (event) => {

        event.preventDefault();

        showOld();

        closeMenu();

    });


document.querySelector("#new")
    .addEventListener("click", (event) => {

        event.preventDefault();

        showNew();

        closeMenu();

    });


document.querySelector("#large")
    .addEventListener("click", (event) => {

        event.preventDefault();

        showLarge();

        closeMenu();

    });


document.querySelector("#small")
    .addEventListener("click", (event) => {

        event.preventDefault();

        showSmall();

        closeMenu();

    });


// ==========================================
// DISPLAY ALL TEMPLES WHEN PAGE LOADS
// ==========================================

showHome();


// ==========================================
// FOOTER COPYRIGHT YEAR
// ==========================================

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();


// ==========================================
// FOOTER LAST MODIFIED
// ==========================================

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
/* ------------------------------
   Product Array
------------------------------ */

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


/* ------------------------------
   Populate Product Select
------------------------------ */

const productSelect = document.querySelector("#product");

if (productSelect) {

    products.forEach(function (product) {

        const option = document.createElement("option");

        option.value = product.id;

        option.textContent = product.name;

        productSelect.appendChild(option);

    });

}


/* ------------------------------
   Footer
------------------------------ */

const currentYear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}

if (lastModified) {

    lastModified.textContent = document.lastModified;

}


/* ------------------------------
   Review Counter
------------------------------ */

const reviewCount = document.querySelector("#reviewCount");

if (reviewCount) {

    const url = new URLSearchParams(window.location.search);

    const product = url.get("product");

    const rating = url.get("rating");

    const installed = url.get("installed");

    if (product && rating && installed) {

        let count =
            Number(localStorage.getItem("reviewCount")) || 0;

        count++;

        localStorage.setItem("reviewCount", count);

        reviewCount.textContent = count;

    } else {

        reviewCount.textContent =
            Number(localStorage.getItem("reviewCount")) || 0;

    }

}
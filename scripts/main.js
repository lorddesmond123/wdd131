/* =========================
   CURRENT YEAR
========================= */

const year = new Date().getFullYear();

const yearElements = document.querySelectorAll("#current-year");

yearElements.forEach((element) => {
    element.textContent = `${year}`;
});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

        mainNav.classList.toggle("show");

        if (mainNav.classList.contains("show")) {
            menuButton.setAttribute("aria-label", "Close navigation menu");
        } else {
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }

    });
}


/* =========================
   BUSINESS DATA
========================= */

const businesses = [
    {
        name: `Tabum Eatery`,
        category: `food`,
        categoryName: `Food`,
        address: `Mangu 932101, Plateau, Nigeria`,
        hours: `Daily: 8:00 AM - 8:00 PM`,
        description: `A local eatery in Mangu where visitors can find food and refreshments.`,
        image: `images/eatery.jpg`
    },

    {
        name: `Hariz Eatery`,
        category: `food`,
        categoryName: `Food`,
        address: `84 Pankshin-Barakin Ladi Road, Mangu`,
        hours: `Hours may vary`,
        description: `A local restaurant located in the Bungha Dawo area of Mangu.`,
        image: `images/eatery.jpg`
    },

    {
        name: `Mangu Friday Market`,
        category: `market`,
        categoryName: `Market`,
        address: `Mangu 932101, Plateau, Nigeria`,
        hours: `Friday: 6:00 AM - 7:00 PM`,
        description: `A local market serving the community on Fridays.`,
        image: `images/market.jpg`
    },

    {
        name: `Central Market`,
        category: `market`,
        categoryName: `Market`,
        address: `Mangu 932101, Plateau, Nigeria`,
        hours: `Hours may vary`,
        description: `A central marketplace in Mangu where local trading takes place.`,
        image: `images/market.jpg`
    },

    {
        name: `Green Garden Hotel`,
        category: `hotel`,
        categoryName: `Hotel`,
        address: `Market area, Mangu 932101, Plateau, Nigeria`,
        hours: `Hours may vary`,
        description: `A hotel located in the market area of Mangu.`,
        image: `images/hotel.jpg`
    },

    {
        name: `Shangtong Hotel Mangu`,
        category: `hotel`,
        categoryName: `Hotel`,
        address: `Mangu 932101, Plateau, Nigeria`,
        hours: `Hours may vary`,
        description: `A hotel providing accommodation in Mangu.`,
        image: `images/hotel.jpg`
    }
];


/* =========================
   DISPLAY BUSINESSES
========================= */

const businessList = document.querySelector("#business-list");
const businessFilter = document.querySelector("#business-filter");
const businessCount = document.querySelector("#business-count");


function displayBusinesses(list) {

    if (!businessList) {
        return;
    }

    businessList.innerHTML = ``;

    list.forEach((business) => {

        const card = document.createElement("article");

        card.classList.add("business-card");

        card.innerHTML = `
            <img
                src="${business.image}"
                alt="${business.name}"
                width="800"
                height="500"
                loading="lazy">

            <div class="business-card-content">

                <span class="business-category">
                    ${business.categoryName}
                </span>

                <h3>${business.name}</h3>

                <p>
                    <strong>Location:</strong>
                    ${business.address}
                </p>

                <p>
                    <strong>Hours:</strong>
                    ${business.hours}
                </p>

                <p>
                    ${business.description}
                </p>

            </div>
        `;

        businessList.appendChild(card);
    });

    if (businessCount) {
        businessCount.textContent =
            `${list.length} local businesses found.`;
    }
}


/* =========================
   BUSINESS FILTER
========================= */

if (businessFilter) {

    const savedCategory =
        localStorage.getItem(`manguBusinessCategory`);

    if (savedCategory) {
        businessFilter.value = savedCategory;
    }

    function filterBusinesses() {

        const selectedCategory = businessFilter.value;

        localStorage.setItem(
            `manguBusinessCategory`,
            selectedCategory
        );

        if (selectedCategory === `all`) {

            displayBusinesses(businesses);

        } else {

            const filteredBusinesses = businesses.filter(
                (business) => business.category === selectedCategory
            );

            displayBusinesses(filteredBusinesses);
        }
    }

    businessFilter.addEventListener(
        `change`,
        filterBusinesses
    );

    filterBusinesses();
}


/* =========================
   HISTORY TIMELINE
========================= */

const timelineButtons =
    document.querySelectorAll(".timeline-button");

timelineButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const content =
            button.nextElementSibling;

        content.classList.toggle("show");

    });

});


/* =========================
   CONTACT FORM
========================= */

const feedbackForm =
    document.querySelector("#feedback-form");

if (feedbackForm) {

    const nameInput =
        document.querySelector("#name");

    const formMessage =
        document.querySelector("#form-message");

    const savedName =
        localStorage.getItem(`visitorName`);

    if (savedName && nameInput) {
        nameInput.value = savedName;
    }


    feedbackForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = nameInput.value.trim();

        const message =
            document.querySelector("#message").value.trim();

        if (name.length < 2) {

            formMessage.textContent =
                `Please enter your full name.`;

            return;
        }

        if (message.length < 10) {

            formMessage.textContent =
                `Your message must contain at least 10 characters.`;

            return;
        }

        localStorage.setItem(
            `visitorName`,
            name
        );

        formMessage.textContent =
            `Thank you, ${name}! Your feedback has been received.`;

        feedbackForm.reset();

        nameInput.value = name;

    });

}